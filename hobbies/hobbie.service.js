const db = require('_helpers/db');
const Hobbie = db.Hobbie;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Hobbie.find();
}

async function getById(id) {
    return await Hobbie.findById(id);
}

async function create(hobbieParam) {
    // validate
    if (await Hobbie.findOne({ title: hobbieParam.title })) {
        throw 'hobb "' + hobbieParam.title + '" is already taken';
    }

    const hobb = new Hobbie(hobbieParam);

    

    // save user

    await hobb.save();
    
}


async function update(id, hobbieParam) {
    const hobb = await Hobbie.findById(id);

    // validate
    if (!hobb) throw 'Experience not found';
    if (hobb.title !== hobbieParam.title && await Hobbie.findOne({ title: hobbieParam.title })) {
        throw 'title "' + hobbieParam.title + '" is already taken';
    }

    
    // copy experienceParam properties to Experience
    Object.assign(Hobbie, hobbieParam);

    await hobb.save();
}

async function _delete(id) {
    await Hobbie.findByIdAndRemove(id);
}