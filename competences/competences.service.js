const db = require('_helpers/db');

const Competence = db.Competence;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Competence.find();
}

async function getById(id) {
    return await Competence.findById(id);
}

async function create(competenceParam) {
    // validate
    if (await Competence.findOne({ title: competenceParam.title })) {
        throw 'title "' + competenceParam.title + '" is already taken';
    }

    const Comp = new Competence(competenceParam);

    

    // save user

    await Comp.save();
    
}


async function update(id, competenceParam) {
    const Comp = await Competence.findById(id);

    // validate
    if (!Comp) throw 'Experience not found';
    if (Comp.title !== competenceParam.title && await Competence.findOne({ title: competenceParam.title })) {
        throw 'title "' + competenceParam.title + '" is already taken';
    }

    
    // copy experienceParam properties to Experience
    Object.assign(Competence, competenceParam);

    await Comp.save();
}

async function _delete(id) {
    await Competence.findByIdAndRemove(id);
}