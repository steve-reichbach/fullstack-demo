const express = require('express');
const router = express.Router();
const vasts = require('../controllers/crud.controller').Vasts;

router.get('/', (req, res) => vasts.getAll().then(data => res.json(data)));

router.post('/', (req, res) => vasts.addOne(req.body.vast).then(data => res.json(data)));

router.put('/update/:id', (req, res) => vasts.updateOne(req.params.id, req.body.vast).then(data => res.json(data)));

router.delete('/delete/:id', (req, res) => vasts.delete(req.params.id).then(data => res.json(data)));

module.exports = router;
