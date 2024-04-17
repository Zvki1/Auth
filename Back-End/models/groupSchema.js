const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: { type: String, required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now }
});

const groupSchema = new Schema({
    name: { type: String, required: true ,unique:true},
    picture: { type: String, default: '../../Front-End/CollabTelecom/src/assets/Logo_group_chat.svg' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [messageSchema]
    });

module.exports = mongoose.model('Group', groupSchema);