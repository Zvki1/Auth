const bcrypt = require('bcrypt');


const User = require('../models/userSchema');
const employe =require ("../models/employeSchema")
const registerUser = async (req,res)=>{
    try{
        const {email,username,password,matricule} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }
        // find if the username is already in use
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(401).json({ error: 'Username already in use' });
        }
        // check if the matricule is in the employees database
        const existingEmploye = await employe.findOne({ matricule });
        if (!existingEmploye) {
            return res.status(402).json({ error: 'Matricule non existant' });
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