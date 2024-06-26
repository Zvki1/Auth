const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const getGroup = async (req, res) => {
    const groupName=req.query.groupName;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'Zvki1');
     try{
        const groupTest = await Group.findOne({name:groupName}).select('name members _id ');
        if (!groupTest) {
          return res.status(404).json({message: "Group not found"});
        }
        // check if the user is a member of the group
        if (!groupTest.members.includes(decoded.userId)) {
            return res.status(400).json({ error: "You are not a member of this group" });
        }
        const group = await Group.findOne({name:groupName}).select('name members _id picture admins').populate('members','username email');

         res.status(200).json({message: "Group found successfully",group});
   } catch (error) {
       res.status(500).json(error);
       console.log(error);
    
    
   }
}

module.exports = getGroup;