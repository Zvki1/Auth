const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
   email : {
       type: String,
       required: true
   },
   username : {
       type: String,
       required: true,
       unique:true
   },
    password : {
         type: String,
         required: true
    },
   
    freinds: [{
        type: Schema.Types.ObjectId,
        ref: 'User' 
    }],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    isOnline: {
        type: Boolean,
        default: false
    },
    role:{
        type: Array,
        default: ['employe']
    }
    
});
module.exports = mongoose.model('User', userSchema);