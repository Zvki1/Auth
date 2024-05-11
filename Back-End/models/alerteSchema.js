const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alerteSchema = new Schema({
    type: { type: String, enum:["ataque","software","autre"],required: true },
    importance:{type: String,enum:["faible","moyen","haut"]},
    description: { type: String },
    date: { type: Date, required: true },
    localisation: { type: String },
    managerResponsable: { type: Schema.Types.ObjectId, ref: 'Employe' },
    isAssigned: { type: Boolean, default: false },
});

module.exports = mongoose.model('Alerte', alerteSchema);