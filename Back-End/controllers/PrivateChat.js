const User = require('../models/userSchema');
const Message = require('../models/messageSchema')
const jwt = require('jsonwebtoken');

const freindInfos = async (req,res)=>{
   
    try{
        const freindId= req.query.freindId;
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        const userId=decoded.userId
       
        // getiing the frnd infos
        const freindInfos = await User.findById(freindId).select('username _id email isOnline');
        // getting the msg 
        const messages = await Message.find({
            $or: [
                { sender: userId, recipient: freindId },
                { sender: freindId, recipient: userId }
            ]
        }).populate('sender','username').sort({ timestamp: 1 }).limit(50);

        // sending the msgsand freindinfos
        res.json({freindInfos,messages});
    } catch (err){
        res.status(500).send({msg:'freinds fetching failed',err});
    }

}

module.exports = freindInfos;