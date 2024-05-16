const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remarqueSchema = new Schema({
    content: { type: String, required: true },
    date: { type: Date, required: true },
    sender: { type: Schema.Types.ObjectId, ref: 'Employe' },
    isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model('Remarque', remarqueSchema);