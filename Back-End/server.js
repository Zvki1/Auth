const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// importing routes
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const profileRoutes = require('./routes/Profile');
const messagesRoutes = require('./routes/Messages');
const addFreindRoutes = require('./routes/addFreind');
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
// user login
app.use('/login',loginRoutes)

// get profile infos 
app.use('/profile',profileRoutes)
// messages list
app.use('/messages',messagesRoutes)

// search for users to add
app.use('/addFreind',addFreindRoutes)
// add freind

