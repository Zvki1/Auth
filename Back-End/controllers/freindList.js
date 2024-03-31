const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const getFreindList = async (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        const user = await User.findById(decoded.userId)
        .populate({
            path:'freinds',
            select:'username email _id'
        })
        user.freinds.sort((a, b) => a.username.localeCompare(b.username));
        res.json({freinds:user.freinds});
    }catch(err){
        res.status(500).send({error:'friend list not found'});
    }
}

module.exports = getFreindList;