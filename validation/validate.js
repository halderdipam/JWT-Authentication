const Joi = require('joi')

const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().required(),
        password:Joi.string().required()
    });
    return schema.validate(user);

}

module.exports = validateUser

