const Joi = require('@hapi/joi');

module.exports = Joi.object({
  email: Joi.string()
    .required()
    .min(5)
    .max(50),
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
});
