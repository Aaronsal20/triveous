
const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag');

router.post('/create', tagController.creatTag);

router.delete('/delete/:id', tagController.delete);

router.get('/all/:page', tagController.getTags);

router.post('/add', tagController.addTag);

router.post('/remove', tagController.removeTag);

module.exports = router;