const Group=require('../models/groupSchema');
const jwt = require('jsonwebtoken');


const generalMessages=async(req,res)=>{
   try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,'Zvki1');
    const groupName = req.query.groupName;
    const group = await Group.findOne({ name: groupName }).populate({
        path: 'messages.sender',
        select: 'username'
    });
    // const findGroup=await Group.findOne({name:group}).select('messages').limit(50);
    // const messages =  findGroup.messages;
    res.json({group});

   } catch (error) {
    res.status(500).send({msg:'general messages fetching failed',error});
   }
}

module.exports=generalMessages;