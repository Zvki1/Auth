// this is the controller for the  delete freind  , so it will delete the freind from the user's freinds list and also delete the private group that was created for the two users
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const privateGroupSchema = require("../models/privateGroupSchema");

const deleteFreind = async (req, res) => {
    const { userId } = req.body;
    console.log('userId:',userId);
    try {
        const token = req.headers.authorization.split(" ")[1];
        const mainUser = jwt.verify(token,'Zvki1');
        const mainUserId = mainUser.userId;
        const friend = await User.findById(userId);
        if (!friend) {
            return res.status(404).json({ error: "Freind not found" });
        }
        const operation1= await User.findByIdAndUpdate(mainUserId, { $pull: { freinds: userId } });
        const operation2=   await User.findByIdAndUpdate(userId, { $pull: { freinds: mainUserId } });
        console.log('operation1:',operation1);
        console.log('operation2:',operation2);
        const group = await privateGroupSchema.findOneAndDelete({members: [mainUserId, userId]});
        console.log('group:',group);
        res.json({ message: "Friend deleted successfully,and private group deleted", group });
    } catch (error) {
        console.error("Error deleting friend:", error);
        res.status(500).json({ error: "Failed to delete friend" });
    }
    }

module.exports = deleteFreind;