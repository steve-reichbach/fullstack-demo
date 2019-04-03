const express = require('express');
const router = express.Router();
const vasts = require('../controllers/vasts.controller');

router.get('/all', (req, res) => vasts.getAll().then(data => res.json(data)));

router.post('/create', (req, res) => vasts.addOne(req.body.vast).then(data => res.json(data)));

router.put('/update/:id', (req, res) => vasts.updateOne(req.params.id, req.body.vast).then(data => res.json(data)));

router.delete('/delete/:id', (req, res) => vasts.delete(req.params.id).then(data => res.json(data)));

module.exports = router;
