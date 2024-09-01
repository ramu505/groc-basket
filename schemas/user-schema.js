const Joi = require('joi');

// Schema for user registration
const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(50).required(),
    email: Joi.string().email().required()
});

// Schema for user login
const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).max(50).required()
});

module.exports = {
    registerSchema,
    loginSchema
};
