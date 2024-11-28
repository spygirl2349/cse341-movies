const router = require('express').Router();
const swagger = require('swagger-ui-express');
const swagFile = require('../swagger-output.json');

router.use('/', swagger.serve);
router.use('/', swagger.setup(swagFile));

module.exports = router;
