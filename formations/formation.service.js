const db = require('_helpers/db');
const Formation = db.Formation;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Formation.find();
}

async function getById(id) {
    return await Formation.findById(id);
}

async function create(formationParam) {
    // validate
    if (await Formation.findOne({ title: formationParam.title })) {
        throw 'formation "' + formationParam.title + '" is already taken';
    }

    const Forma = new Formation(formationParam);

    

    // save user

    await Forma.save();
    
}


async function update(id, formationParam) {
    const Forma = await Formation.findById(id);

    // validate
    if (!Forma) throw 'Formation not found';
    if (Forma.title !== formationParam.title && await Formation.findOne({ title: formationParam.title })) {
        throw 'title "' + formationParam.title + '" is already taken';
    }

    
    // copy FormationParam properties to Formation
    Object.assign(Formation, formationParam);

    await Forma.save();
}

async function _delete(id) {
    await Formation.findByIdAndRemove(id);
}