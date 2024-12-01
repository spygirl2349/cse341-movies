const router = require('express').Router();
// const controller = require('../controller/index');



router.get('/', (req, res) => {
    res.send('Hello this is the home page')
});

//add more routes here
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));

router.use('/api-docs', require('./swag'));



module.exports = router;
