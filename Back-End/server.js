const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// importing routes
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
// IMPORTING THE USER MODEL
const User = require('./models/userSchema');

// express connection
const app = express();
//connect to mongodb
const dbURI = "mongodb://Zvki1:Nadz3EMn57cESWQ4@ac-b3mzl8n-shard-00-00.zkwoogj.mongodb.net:27017,ac-b3mzl8n-shard-00-01.zkwoogj.mongodb.net:27017,ac-b3mzl8n-shard-00-02.zkwoogj.mongodb.net:27017/?ssl=true&replicaSet=atlas-al2c0u-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    async function mongoseConnect(){
        try {
            await mongoose.connect(dbURI)
            console.log('connected to database')
        } catch (error) {
            console.log(error)
        }
    }
    mongoseConnect()
    app.listen(8000,()=>{
        console.log('Server is running on port 8000');
    });
    
//middleware
app.use(bodyParser.json());
app.use(cors());



//routes
// user registration
app.use('/register',registerRoutes)
// app.post('/register',async (req,res)=>{
//     try{
//         const {email,username,password} = req.body;
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: 'Email already in use' });
//         }
//         const hashedPassword = await bcrypt.hash(password,10);
//         const user = new User({
//             email,
//             username,
//             password:hashedPassword
//         });
//         const result = await user.save();
//         res.status(201).send(result);
//     }catch(err){
//         res.status(500).send({err:'Error in registration',err});
//     }
// });

// app.get('/register',async (req,res)=>{
//     try{
//         const result = await User.find();
//         res.status(201).send(result);
//     }catch(err){
//         res.status(500).send({err:'unable to get users'});
//     }
// });

// user login
app.use('/login',loginRoutes)
// app.post('/login',async (req,res)=>{
//     try{
//         const {email,password} = req.body;
//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(401).send({error:'email deos not exist'});
//         }
//         const isMatch = await bcrypt.compare(password,user.password);
//         if(!isMatch){
//             return res.status(401).send({error:'Invalid  password'});
//         }
//         const token = jwt.sign({userId:user._id},'Zvki1',{expiresIn:'8h'});
//         console.log(jwt.verify(token,'Zvki1'));
//          res.json({message:'Login success',token});
//     }catch (err){
//         res.status(500).send({err:'Login failed'});

//     }

// });