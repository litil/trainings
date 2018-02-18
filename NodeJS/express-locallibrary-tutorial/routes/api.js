var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');

/// BOOK ROUTES ///

// GET request for list of all Book items.
router.get('/books', book_controller.api_book_list);

// POST request for creating Book.
// router.post('/book/create', book_controller.api_book_create_post);

module.exports = router;
