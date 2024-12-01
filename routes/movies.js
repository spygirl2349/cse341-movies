const router = require('express').Router();
const controller = require('../controller/index');

//get
router.get('/', controller.getMovies);
router.get('/:id', controller.getOneMovie);

//post
router.post('/', controller.addMovie);

//put
router.put('/:id', controller.updateMovie);

//delete
router.delete('/:id', controller.deleteMovie);

module.exports = router;