const express = require('express');
const router = express.Router();
const formationService = require('./formation.service');

// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    formationService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    formationService.getAll()
        .then(formations => res.json(formations))
        .catch(err => console.log(error));
}

function getCurrent(req, res, next) {
    formationService.getById(req.formation.sub)
        .then(formation => formation ? res.json("ok") : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    formationService.getById(req.params.id)
        .then(formation => formation ? res.json(formation) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    formationService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    formationService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}