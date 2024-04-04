const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');

// importing routes
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const profileRoutes = require('./routes/Profile');
const messagesRoutes = require('./routes/Messages');
const addFreindRoutes = require('./routes/addFreind');
const freindListRoutes = require('./routes/freindList');
const privateChatRoutes = require('./routes/PrivateChat');
// midleware
const verifyToken = require('./middleware/verifyToken');
// IMPORTING THE USER MODEL
const User = require('./models/userSchema');
const Message = require('./models/messageSchema');


// express connection
const app = express();

                                    //middleware
app.use(bodyParser.json());
app.use(cors());

                                    //routes

// user registration
app.use('/register',registerRoutes)
// user login
app.use('/login',loginRoutes)

// get profile infos 
app.use('/profile',verifyToken,profileRoutes)
// messages list
app.use('/messages',verifyToken,messagesRoutes)

// search for users to add
app.use('/addFreind',verifyToken,addFreindRoutes)

// freind list 
app.use('/freindList',verifyToken,freindListRoutes)

//  private chat
app.use('/PrivateChat',verifyToken,privateChatRoutes)


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

    const server = require('http').createServer(app);
    const io = require('socket.io')(server, {
        cors: {
          origin: "http://127.0.0.1:5173"
        }
      });

    io.on('connection', (socket) => {
        // set the user online 
        User.updateOne({_id:socket.handshake.headers.userid},{isOnline:true})
        .then(() => {
            console.log('User is online');
        })
        .catch((error) => {
            console.log('Error:',error);
        })
        console.log('User connected with the socket server');
        // console.log('socket id:',socket.id);
        // console.log('socket token',socket.handshake.auth.token.substring(0,10));
        // console.log('socket userId:',socket.handshake.headers.userid);
        // creatin a room for the user
        socket.join(socket.handshake.headers.userid);
        // joing the global room
        socket.join('IT Group');
        console.log('my rooms',socket.rooms);
        socket.on('disconnect', () => {
            console.log('User disconnected from the socket server');
        });

        socket.on('chat message', async  (msg,receiverId) => {
            console.log('Message:', msg);
            try {
                // saving the message
                const newMessage = new Message ({
                    content: msg,
                    sender: socket.handshake.headers.userid,
                    recipient: receiverId,
                    timestamp:new Date()
                })
                await newMessage.save();
                console.log('Message enregistré dans la base de données:', newMessage);

            } catch (error) {
                console.error('Erreur lors de l\'enregistrement du message:', error);
            }
            io.to(receiverId).emit('chat message', msg,receiverId);
          
            // socket.broadcast.emit('chat message', msg,receiverId);
        });
        // handle typing
        socket.on('typing', (receiverId) => {
            io.to(receiverId).emit('typing')
        });
        // handle stop typing
        socket.on('stop typing', (receiverId) => {
            io.to(receiverId).emit('stop typing')
        });
        // for the global chat
        socket.on('IT Group', (msg) => {
            console.log('Message:', msg);
            socket.broadcast.emit('IT Group', msg);
        });

    });

    server.listen(8000,()=>{
        console.log('Server is running on port 8000');
    });
    

