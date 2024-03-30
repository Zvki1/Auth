const bcrypt = require('bcrypt');


const User = require('../models/userSchema');

const registerUser = async (req,res)=>{
    try{
        const {email,username,password} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            email,
            username,
            password:hashedPassword
        });
        const result = await user.save();
        res.status(201).send(result);
    }catch(err){
        res.status(500).send({err:'Error in registration',err});
    }
}

const getUsers = async (req,res)=>{
    try{
        const result = await User.find();
        res.status(201).send({result,"message":"Users fetched successfully from database"});
    }catch(err){
        res.status(500).send({err:'unable to get users'});
    }
}

module.exports = {registerUser,getUsers};