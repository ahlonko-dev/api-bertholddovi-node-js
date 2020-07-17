const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    pseudo: { type: String, unique: true, required: true },
    lastname: { type: String},
    email: { type: String, unique: true, required: true },
    adresse: { type: String},
    telephone: { type: Number},
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema, "users");