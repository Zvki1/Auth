const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");


const deleteGroupMember = async (req, res) => {
    // get the reqparams
    const { groupName, memberId } = req.body;

    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'Zvki1');
        const user = await User.findById(decoded.userId).select('username  _id');
        //check if the user exists and is admin of the group
        const group = await Group.findOne({ name: groupName });
        if (!group) {
            return res.status(400).json({ error: "Group not found" });
        }
        if (!group.admins.includes(user._id)) {
            return res.status(400).json({ error: "You are not an admin of this group" });
        }
        // check if the member to  delete is the admin 
        if (group.admins.includes(memberId)) {
            return res.status(400).json({ error: "You can't delete an admin" });
        }
        const deletion = await Group.updateOne({ name: groupName }, { $pull: { members: memberId } });

        return res.status(200).json({ message: "Member deleted successfully", deletion });
    } catch (error) {
        console.log(error);
       return res.status(500).json(error);
    }

}

module.exports = deleteGroupMember;