const express = require('express');
const router = express.Router();
const competencesService = require('./competences.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    competencesService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    competencesService.getAll()
        .then(users => res.json(users))
        .catch(err => console.log(error));
}

function getCurrent(req, res, next) {
    competencesService.getById(req.user.sub)
        .then(user => user ? res.json("ok") : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    competencesService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    competencesService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    competencesService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}