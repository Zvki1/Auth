const privateGroupSchema = require("../models/privateGroupSchema");
const User = require("../models/userSchema");
const Notification = require("../models/notificationSchema");
const jwt = require("jsonwebtoken");

const searchUser = async (req, res) => {
try {
      const searchTerm = req.query.searchTerm;
      const token = req.headers.authorization.split(" ")[1];
      const mainUser = jwt.verify(token,'Zvki1');
      const mainUserId = mainUser.userId;
      console.log('mainUserId:',mainUserId);
      if (!searchTerm) {
         return res.json({ users: [], message: "No search term provided"});
      }
      const users = await User.find({
         $and: [
            { $or: [
               { username: { $regex: searchTerm, $options: "i" }},
               { email: { $regex: searchTerm, $options: "i" }}
            ]},
            { _id: { $ne: mainUserId } }, // Exclure l'utilisateur principal de la recherche
            { freinds: { $ne: mainUserId } } // Exclure les utilisateurs déjà amis avec l'utilisateur principal
         ]
      }, { password: 0, __v: 0 }).limit(7);
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
      const newGroup = new privateGroupSchema({
         members: [mainUserId, userId],
         messages: []
      });
      const creatingGroup= await newGroup.save();
      console.log('creatingGroup:',creatingGroup);
      // send notification to friend
      const notification = new Notification({
         titre: "Demande d'ami",
         description: `${mainUser.username} vous a ajouté comme ami`,
         date: new Date(),
         receiver: userId
      });
      await notification.save();
      res.json({ message: "Friend added successfully,and private group created", newGroup });

   } catch (error) {
      console.error("Error adding friend:", error);
      res.status(500).json({ error: "Failed to add friend" });
   } 
}

module.exports = {searchUser, addUser};

