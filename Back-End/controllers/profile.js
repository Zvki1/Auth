const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const getProfile = async (req,res)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,'Zvki1');
        const user = await User.findById(decoded.userId).select('-password');;
        res.json({user});
    }catch(err){
        res.status(500).send({error:'profile not found'});
    }
}

module.exports = getProfile;