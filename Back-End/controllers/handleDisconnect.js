const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const handleDisconnect = async (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        const userId=decoded.userId
        await
        User.updateOne({_id:userId},{isOnline:false})
        .then(() => {
            res.json({msg:'User is offline'});
        })
        .catch((error) => {
            res.status(500).send({msg:'User is still online',error});
        })
    }
    catch(err){
        res.status(500).send({msg:'User is still online',err});
    }
}

module.exports = handleDisconnect;