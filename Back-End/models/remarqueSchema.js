const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remarqueSchema = new Schema({
    content: { type: String},
    date: { type: Date, required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    isFinished: { type: Boolean, default: false },
    path: { type: String }
});

module.exports = mongoose.model('Remarque', remarqueSchema);