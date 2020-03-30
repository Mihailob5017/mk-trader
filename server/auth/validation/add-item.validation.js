const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string()
    .required()
    .min(2)
    .max(50),
  type: Joi.string().required(),
  description: Joi.string(),
  imageUrl: Joi.string(),
  price: Joi.number().required()
});
