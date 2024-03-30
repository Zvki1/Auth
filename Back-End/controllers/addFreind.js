const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const searchUser = async (req, res) => {
try {
      const searchTerm = req.query.searchTerm;
      if (!searchTerm) {
         return res.json({ users: [], message: "No search term provided"});
      }
      const users = await User.find( { $or: [
      {username: { $regex: searchTerm, $options: "i" }},
      {email: { $regex: searchTerm, $options: "i" }}
      ]},
      { password: 0, __v: 0}
      ).limit(7);
      // if no users found,inform the front end that no users were found
      // if(users.length <1){
      //    return res.json({message: "No users found"})
      // }
   res.json({ users });
   } catch (error) {
      console.error("Error searching for friends:", error);
      res.status(500).json({ error: "Failed to search for friends" });
  }
};

const addUser = async (req, res) => {
   const { userId } = req.body;
   try {
      const token = req.headers.authorization.split(" ")[1];
      const mainUser = jwt.verify(token,'Zvki1');
      const mainUserId = mainUser.userId;
      const friend = await User.findById(userId);
      if (!friend) {
         return res.status(404).json({ error: "Freind not found" });
      }
      const operation1= await User.findByIdAndUpdate(mainUserId, { $addToSet: { freinds: userId } });
      const operation2=   await User.findByIdAndUpdate(userId, { $addToSet: { freinds: mainUserId } });
      console.log('operation1:',operation1);
      console.log('operation2:',operation2);
      res.json({ message: "Friend added successfully", operation1, operation2});

   } catch (error) {
      console.error("Error adding friend:", error);
      res.status(500).json({ error: "Failed to add friend" });
   } 
}

module.exports = {searchUser, addUser};

