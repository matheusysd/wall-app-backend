const Joi = require("joi");

const schemas = {
  userPOST: Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    userId: Joi.string().min(3).max(50),
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(6).max(30).required(),
  }),
  userLoginPOST: Joi.object().keys({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().min(6).max(30).required(),
  }),
  createEditPostPOST: Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    author: Joi.string().required(),
    authorId: Joi.string().required(),
  }),
  postParams: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = schemas;
