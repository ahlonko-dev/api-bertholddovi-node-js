const db = require('_helpers/db');
const Information = db.Information;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Information.find();
}

async function getById(id) {
    return await Information.findById(id);
}

async function create(informationParam) {
    // validate
    if (await Information.findOne({ title: informationParam.title })) {
        throw 'info "' + informationParam.title + '" is already taken';
    }

    const Info = new Information(informationParam);

    

    // save user

    await Info.save();
    
}


async function update(id, informationParam) {
    const Info = await Information.findById(id);

    // validate
    if (!Info) throw 'Experience not found';
    if (Info.title !== informationParam.title && await Information.findOne({ title: informationParam.title })) {
        throw 'title "' + informationParam.title + '" is already taken';
    }

    
    // copy experienceParam properties to Experience
    Object.assign(Information, informationParam);

    await Info.save();
}

async function _delete(id) {
    await Information.findByIdAndRemove(id);
}