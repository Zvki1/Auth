const User = require("../models/userSchema");

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

module.exports = searchUser;
