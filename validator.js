// See https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go for more info
const { body, validationResult } = require('express-validator');

const v = {};

v.userValidationRules = () => {
    return [
        // username must be an email
        body('username').isEmail(),
        // password must be at least 5 chars long
        body('password').isLength({ min: 5 }),
    ]
}

v.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = v;