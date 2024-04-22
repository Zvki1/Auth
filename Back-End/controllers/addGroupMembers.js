const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const addGroupMembers = async (req, res) => {
    const token=req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'Zvki1');
    try {
        const { groupName, newMembers } = req.body;
        const Groupsearched = await Group.findOne({ name: groupName });
        if (!Groupsearched) {
            return res.status(400).json({ error: "Group not found" });
        }
        // check if the user is in the admins of the group 
        if (!Groupsearched.admins.includes(decoded.userId)) {
            return res.status(400).json({ error: "You are not an admin of this group" });
        }
        //check if the new members are already in the group
        const members = Groupsearched.members;
        for (const member of newMembers) {
            if (members.includes(member)) {
                return res.status(400).json({ error: `The user ${member} is already in the group` });
            }
        }
        //update the group
        const updatedGroup = await Group.findOneAndUpdate(
            { name: groupName }, 
            { $push: { members: { $each: newMembers } } },
            { new: true }
        );
        res.status(200).json({ message: "Members added successfully", updatedGroup });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = addGroupMembers;