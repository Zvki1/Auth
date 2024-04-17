const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const updateProfile = async (req,res)=>{
    const {username,password,email} = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,'Zvki1');
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.findById(decoded.userId).select('email id username');
        if(username && username !== user.username){
            const existingUsername = await User.findOne({username})
            if(existingUsername){
                return res.status(400).json({message:'Username already exists'});
            }
            user.username = username;
        }else if(username === user.username){
            return res.status(400).json({message:'Username already USED by you'});
        }
        if(password){
            user.password = hashedPassword;
        }
        if(email){
            user.email = email;
        }
        await user.save();
        res.json({message:'Profile updated successfully',user});
    }catch(err){
        res.status(500).send({message:"Error in updating profile",err});
    }
}

module.exports = updateProfile;