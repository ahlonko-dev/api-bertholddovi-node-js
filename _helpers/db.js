//const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
//mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
let uri = "mongodb+srv://dbUser:dYhU1vxb81ZX9yyT@bertholdmongodb-ztfz0.mongodb.net/bertholddovi-cv?retryWrites=true&w=majority";
mongoose.connect(uri , connectionOptions);
mongoose.Promise = global.Promise;
//
module.exports = {
    User: require('../users/user.model'),
    Experience: require('../experiences/experiences.model'),
    Competence: require('../competences/competences.model'),
    Information: require('../informations/information.model'),
    Language: require('../languages/language.model'),
    Hobbie: require('../hobbies/hobbie.model'),
    Formation: require('../formations/formation.model'),
};