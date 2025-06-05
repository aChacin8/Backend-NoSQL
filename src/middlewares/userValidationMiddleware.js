const {celebrate, Joi, Segments} = require ('celebrate');

const userValidation = celebrate ({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().max(50).message({
            'string.empty': 'Name is required',
            'string.max': 'Name can´t be bigger than 50 characters'
        }),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8)
    })
})

module.exports = userValidation;