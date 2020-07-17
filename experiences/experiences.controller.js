const express = require('express');
const router = express.Router();
const experienceService = require('./experiences.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    experienceService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    experienceService.getAll()
        .then(users => res.json(users))
        .catch(err => console.log(error));
}

function getCurrent(req, res, next) {
    experienceService.getById(req.user.sub)
        .then(user => user ? res.json("ok") : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    experienceService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    experienceService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    experienceService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}