const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");


const editGroup = async (req, res) => {
    // get the reqparams
    const { groupName, newName } = req.body;

    const token = req.headers.authorization.split(' ')[1];

    try {

        const decoded = jwt.verify(token, 'Zvki1');
        const user = await User.findById(decoded.userId).select('username  _id');
        //check if the user exists and is admin of the group
        const group = await Group.findOne({ name: groupName });
        console.log(group);
        console.log("new name", newName);
        if (!group) {
            return res.status(400).json({ error: "Group not found" });
        }
        if (!group.admins.includes(user._id)) {
            return res.status(400).json({ error: "You are not an admin of this group" });
        }
        // check if the newName is already taken
        const groupWithNewName = await Group.findOne({ name: newName });
        if (groupWithNewName) {
            return res.status(400).json({ error: "Group name already taken" });
        }
        const update = await Group.updateOne({ name: groupName }, { $set: { name: newName } });



        return res.status(200).json({ message: "Group updated successfully", update });
    } catch (error) {
        console.log(error);
       return res.status(500).json(error);
    }

}

module.exports = editGroup;