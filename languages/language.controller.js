const express = require('express');
const router = express.Router();
const languageService = require('./language.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    languageService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    languageService.getAll()
        .then(languages => res.json(languages))
        .catch(err => console.log(error));
}

function getCurrent(req, res, next) {
    languageService.getById(req.language.sub)
        .then(language => language ? res.json("ok") : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    languageService.getById(req.params.id)
        .then(language => language ? res.json(language) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    languageService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    languageService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}