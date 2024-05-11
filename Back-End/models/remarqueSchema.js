const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const remarqueSchema = new Schema({
    content: { type: String, required: true },
    date: { type: Date, required: true },
    ticket: { type: Schema.Types.ObjectId, ref: 'Ticket' },
    sender: { type: Schema.Types.ObjectId, ref: 'Employe' },
});

module.exports = mongoose.model('Remarque', remarqueSchema);