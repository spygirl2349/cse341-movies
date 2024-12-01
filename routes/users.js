const router = require('express').Router();
const controller = require('../controller/index');
const v = require('../validator')

// GET
router.get('/', controller.getUsers);
router.get('/:id', controller.getOneUser);

// POST
// router.post('/', v.userValidationRules(), v.validate, (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: req.body.password,
//     }).then(user => res.json(user))
// })
router.post('/', controller.createUser);

// DELETE
router.delete('/:id', controller.deleteUser);

module.exports = router;