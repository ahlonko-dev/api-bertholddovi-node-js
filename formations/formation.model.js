const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, unique: true},
    start: { type: String},
    end: { type: String},
    category: { type: String},
    user_id: { type: String},
    createdDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Formation', schema, "formations");