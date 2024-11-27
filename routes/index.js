const router = require('express').Router();
// const controller = require('../controller/index');



router.get('/', (req, res) => {
    res.send('Hello World')
});

//add more routes here
//i.e. router.use('/route', require('./some-route'));



module.exports = router;
