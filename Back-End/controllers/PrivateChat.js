const User = require('../models/userSchema');
const Message = require('../models/messageSchema')
const PrivateGroup = require('../models/privateGroupSchema')
const jwt = require('jsonwebtoken');
const { encrypt, decrypt } = require("../cipher");
const freindInfos = async (req,res)=>{
   
    try{
        const freindId= req.query.freindId;
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        const userId=decoded.userId
       
        // getiing the frnd infos
        const freindInfos = await User.findById(freindId).select('username _id email isOnline');
        // getting the msg from the private chat
        // const messages = await Message.find({
        //     $or: [
        //         { sender: userId, recipient: freindId },
        //         { sender: freindId, recipient: userId }
        //     ]
        // }).populate('sender','username').sort({ timestamp: -1 }).limit(50);
        // messages.reverse();
        // sending the msgsand freindinfos

        
        const privateGroup = await PrivateGroup.findOne({
            members: { $all: [userId, freindInfos._id] }
        },'messages').populate('messages.sender','username');
        // console.log("privateGroup.messages",privateGroup.messages,"\n\n");
        privateGroup.messages.forEach(msg => {
            // console.log("msg.encryptedcontent:",msg.encryptedcontent,"\n -----------------------\n");
    })
        privateGroup.messages.forEach(msg => {
            // console.log("msg",msg,"\n\n");
            if ((msg.encryptedcontent.iv) && (msg.encryptedcontent.encryptedData)) {
                // console.log("am undified");
                // console.log("encrypted mesageform db",msg.encryptedcontent);
                // console.log(msg.content,"msg.content");
                // its genearting error argue
                // console.log("encrypted mesageform db",msg.encryptedcontent);
                try {
                    msg.content = decrypt(msg.encryptedcontent);
                } catch (err) {
                    console.log("error from decrypting in the private chat",err);
                }
            }else {
                console.log("decrypted mesageform db of else",msg.content);
            }
        });
        res.json({freindInfos,privateGroup});
    } catch (err){
        res.status(500).send({msg:'freinds fetching failed',err});
    }

}

module.exports = freindInfos;