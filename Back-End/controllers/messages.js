const User = require('../models/userSchema');
const Group = require('../models/groupSchema');
const jwt = require('jsonwebtoken');
const privateGroup = require('../models/privateGroupSchema');
const getFreindsList = async (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        //  this is how you can add a friend to the user
        // const updatedUser = await User.findByIdAndUpdate(decoded.userId, { $addToSet: { friends: '66042cd8048f94d0fe899aeb' } }, { new: true });
        const user = await User.findById(decoded.userId).populate('freinds');
   
        // extrating freinds info
        const freindsInfo = user.freinds.map(freind => ({
            _id: freind._id,
            email: freind.email,
            username: freind.username,
            isOnline: freind.isOnline,
        }));
        const grouplist=await Group.find({ members: user._id },'name')
        
        res.json({freinds: freindsInfo,user: {username: user.username,id: user._id},groups:grouplist});
    }catch(err){
        res.status(500).send({err:'Server test error'});
    }
}

module.exports = getFreindsList;