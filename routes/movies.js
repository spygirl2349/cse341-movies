const router = require('express').Router();
const controller = require('../controller/index');
const isAuth = require('../middleware/authenticate');

//get
router.get('/', controller.getMovies);
router.get('/:id', controller.getOneMovie);

//post
router.post('/', isAuth, controller.addMovie);

//put
router.put('/:id', isAuth, controller.updateMovie);

//delete
router.delete('/:id', isAuth, controller.deleteMovie);

module.exports = router;