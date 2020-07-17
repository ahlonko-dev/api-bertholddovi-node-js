const express = require('express');
const router = express.Router();
const informationService = require('./information.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    informationService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    informationService.getAll()
        .then(users => res.json(users))
        .catch(err => console.log(error));
}

function getCurrent(req, res, next) {
    informationService.getById(req.user.sub)
        .then(user => user ? res.json("ok") : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    informationService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    informationService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    informationService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}