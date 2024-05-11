const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    importance:{type: String,enum:["faible","moyen","haut"]},
    date: { type: Date, required: true },
    status: { type: String, enum: ["open", "closed"], default: "open" },
    localisation: { type: String },
    assignedTo:[{ type: Schema.Types.ObjectId, ref: 'Employe' }],
    
});

module.exports = mongoose.model('Ticket', ticketSchema);