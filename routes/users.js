const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { registerSchema, loginSchema } = require('../schemas/user-schema');
const { create } = require('../handlers/users')

// Middleware to validate request body against JOI schema
const validateSchema = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

// User registration route with validation
router.post('/register', validateSchema(registerSchema), async (req, res) => {
    // Handle registration
    const response = await create(req, res)
    res.send(response);
});

// User login route with validation
router.post('/login', validateSchema(loginSchema), (req, res) => {
    // Handle login
    res.send('User logged in successfully');
});

module.exports = router;
