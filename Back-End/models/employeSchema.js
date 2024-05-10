const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeSchema = new Schema({
    matricule: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
});

module.exports = mongoose.model('Employe', employeSchema);