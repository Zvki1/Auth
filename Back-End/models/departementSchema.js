const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departementSchema = new Schema({
    name: { type: String, required: true,unique:true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    });

module.exports = mongoose.model('Departement', departementSchema);