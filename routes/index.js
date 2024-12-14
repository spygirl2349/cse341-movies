const passport = require('passport');

const router = require('express').Router();
// const controller = require('../controller/index');



// router.get('/', (req, res) => {
//     res.send('Hello this is the home page')
// });

//add more routes here
router.use('/movies', require('./movies'));
router.use('/users', require('./users'));

router.use('/api-docs', require('./swag'));

//login & logout routes
router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;
