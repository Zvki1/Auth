const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    titre: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    receiver : { type: Schema.Types.ObjectId, ref: 'User' },
    isArchived: { type: Boolean, default: false },
});

module.exports = mongoose.model('Notification', notificationSchema);