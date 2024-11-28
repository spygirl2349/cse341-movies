const router = require('express').Router();
const controller = require('../controller/index');

//get
router.get('/', controller.getMovies);

//post
router.post('/', controller.addMovie);


module.exports = router;