const express = require('express');
const router = express.Router();
const keywords = require('../controllers/crud.controller').KeywordLists;

router.get('/', (req, res) => keywords.getAll().then(data => res.json(data)));

router.post('/', (req, res) => keywords.addOne(req.body.keyword).then(data => res.json(data)));

router.put('/update/:id', (req, res) => keywords.updateOne(req.params.id, req.body.keyword).then(data => res.json(data)));

router.delete('/delete/:id', (req, res) => keywords.delete(req.params.id).then(data => res.json(data)));

module.exports = router;
