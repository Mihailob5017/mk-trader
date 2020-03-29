const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string()
    .required()
    .min(2)
    .max(30),
  type: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().required()
});
