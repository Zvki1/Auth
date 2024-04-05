const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: { type: String, required: true ,unique:true},
    picture: { type: String, default: '../../Front-End/CollabTelecom/src/assets/Logo_group_chat.svg' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
    });

module.exports = mongoose.model('Group', groupSchema);