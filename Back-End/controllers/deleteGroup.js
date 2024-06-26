const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");



const deleteGroup = async (req, res) => {
    // get the reqparams
    const { groupName } =req.query;

   
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'Zvki1');
        const user = await User.findById(decoded.userId).select('username  _id');
        //check if the user exists and is admin of the group
        const group = await Group.findOne({name: groupName });
        if (!group) {
            return res.status(400).json({ error: "Group not found" });
        }
        if (!group.admins.includes(user._id)) {
            return res.status(400).json({ error: "You are not an admin of this group" });
        }
        const deletion =await Group.deleteOne({name: groupName});
        
        res.status(200).json({ message: "Group deleted successfully" ,deletion});
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }

}

module.exports = deleteGroup;