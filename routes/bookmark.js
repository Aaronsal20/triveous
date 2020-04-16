const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmark');

router.post('/create',bookmarkController.createBookmark);

// router.post('/update', bookmarkController.);

router.get('/all/:page', bookmarkController.getBookmarks);

router.post('/delete/:id', bookmarkController.delete);


module.exports = router;
