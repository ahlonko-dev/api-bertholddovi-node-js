const db = require('_helpers/db');
const Language = db.Language;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function getAll() {
    return await Language.find();
}

async function getById(id) {
    return await Language.findById(id);
}

async function create(languageParam) {
    // validate
    if (await Language.findOne({ title: languageParam.title })) {
        throw 'Lang "' + languageParam.title + '" is already taken';
    }

    const Lang = new Language(languageParam);

    

    // save user

    await Lang.save();
    
}


async function update(id, languageParam) {
    const Lang = await Language.findById(id);

    // validate
    if (!Lang) throw 'Experience not found';
    if (Lang.title !== LanguageParam.title && await Language.findOne({ title: languageParam.title })) {
        throw 'Language "' + languageParam.title + '" is already taken';
    }

    
    // copy experienceParam properties to Experience
    Object.assign(Language, languageParam);

    await Lang.save();
}

async function _delete(id) {
    await Language.findByIdAndRemove(id);
}