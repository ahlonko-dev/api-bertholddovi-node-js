const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String},
    others: { type: String},
    user_id: { type: String},
    createdDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Hobbie', schema, "hobbies");