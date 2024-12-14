const router = require('express').Router();
const controller = require('../controller/index');
//const v = require('../validator')
const isAuthenticated = require('../middleware/authenticate');

// GET
router.get('/', controller.getUsers);
router.get('/:id', controller.getOneUser);

// POST
router.post('/', isAuthenticated, controller.createUser);

// DELETE
router.delete('/:id', isAuthenticated, controller.deleteUser);

module.exports = router;