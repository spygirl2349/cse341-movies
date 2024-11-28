const router = require('express').Router();
// const controller = require('../controller/index');



router.get('/', (req, res) => {
    res.send('Hello World')
});

//add more routes here
//i.e. router.use('/route', require('./some-route'));
router.use('/movies', require('./movies'));
router.use('/api-docs', require('./swag'));


module.exports = router;
