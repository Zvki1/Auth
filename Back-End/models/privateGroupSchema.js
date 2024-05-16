const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    content: { type: String },
    encryptedcontent: { iv: String, encryptedData: String },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now }
});
const privateGroupSchema = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [messageSchema]
});

module.exports = mongoose.model('PrivateGroup', privateGroupSchema);