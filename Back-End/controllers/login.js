const User = require('../models/userSchema');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).send({error:'email deos not exist'});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).send({error:'Invalid  password'});
        }
        const token = jwt.sign({userId:user._id},'Zvki1',{expiresIn:'8h'});
        console.log(jwt.verify(token,'Zvki1'));
        res.json({message:'Login success',token});
    }catch (err){
        res.status(500).send({err:'Login failed'});

    }

}

module.exports = loginUser;