const Group = require("../models/groupSchema");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const createGroup = async (req, res) => {
  const { name, members } = req.body;
  const token = req.headers.authorization.split(' ')[1];

  try {

    const decoded = jwt.verify(token,'Zvki1');
    const user = await User.findById(decoded.userId).select('username  _id');
    //check if the user exists
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    //checkin if the group already exists
    const existingGroup = await Group.findOne({ name: name });
    if (existingGroup) {
      return res.status(400).json({ error: "Group with this name already exists" });
    }

    //check if the creator is in the members list if not add it to the members list 
    if(!members.includes(user._id)){
      console.log("user not in the members list so we is added in the backend");
      members.push(user._id);
    }

    //create the group
    const newGroup = new Group({
      name:name,
      members:members,
      admins:[user._id]
    });
    await newGroup.save();
    res.status(200).json({newGroup, message:"group created successfully"});
  } catch (error) {
    res.status(500).json(error);
  }

};

module.exports = createGroup;
