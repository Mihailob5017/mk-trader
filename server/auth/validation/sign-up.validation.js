const Joi = require('@hapi/joi');

module.exports = Joi.object({
  firstname: Joi.string().max(20),
  lastname: Joi.string().max(20),
  username: Joi.string()
    .min(4)
    .max(25)
    .required(),
  email: Joi.string()
    .min(6)
    .max(50)
    .required(),
  avatarType: Joi.string().required(),
  password: Joi.string()
    .required()
    .min(5)
    .max(1024),
  willAddItemsToStore: Joi.boolean().required(),
  createdAt: Joi.date(),
  dateOfBirth: Joi.date(),
  currentCity: Joi.string()
    .min(2)
    .max(30),
  currentAddres: Joi.string()
    .min(3)
    .max(60),
  cartItems: Joi.array().required()
});
