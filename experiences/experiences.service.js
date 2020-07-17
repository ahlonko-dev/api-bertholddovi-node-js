const db = require('_helpers/db');
const Experience = db.Experience;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Experience.find();
}

async function getById(id) {
    return await Experience.findById(id);
}

async function create(experienceParam) {
    // validate
    if (await Experience.findOne({ title: experienceParam.title })) {
        throw 'title "' + experienceParam.title + '" is already taken';
    }

    const Exp = new Experience(experienceParam);

    // save user
    await Exp.save();
    
}


async function update(id, experienceParam) {
    const Exp = await Experience.findById(id);

    // validate
    if (!Exp) throw 'Experience not found';
    if (Exp.title !== experienceParam.title && await Experience.findOne({ title: experienceParam.title })) {
        throw 'title "' + experienceParam.title + '" is already taken';
    }

    
    // copy experienceParam properties to Experience
    Object.assign(Experience, experienceParam);

    await Exp.save();
}

async function _delete(id) {
    await Experience.findByIdAndRemove(id);
}