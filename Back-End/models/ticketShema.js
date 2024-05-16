const mongoose = require('mongoose');
const remarqueSchema = require('./remarqueSchema');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    importance:{type: String,enum:["faible","moyen","haut"]},
    date: { type: Date, required: true },
    status: { type: String, enum: ["open", "closed"], default: "open" },
    localisation: { type: String },
    assignedTo:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    remarques:[{type: Schema.Types.ObjectId, ref: 'Remarque'}]
    
});

module.exports = mongoose.model('Ticket', ticketSchema);