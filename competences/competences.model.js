const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, unique: true},
    level: { type: String},
    others: { type: String},
    user_id: { type: String},
    createdDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Competences', schema, "competences");