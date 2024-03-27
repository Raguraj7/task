import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.alphanum': 'Username must only contain alpha-numeric characters',
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username must be less than or equal to 30 characters long',
    'any.required': 'Username is required',
    'string.empty': 'Username is not allowed to be empty',
    'string.pattern.base':
      'Username must only contain alpha-numeric characters',
    // 'string.email': 'Username must be a valid email',
    // 'number.base': 'Username must be a number',
    // 'number.integer': 'Username must be an integer',
    // 'number.min': 'Username must be greater than or equal to 3',
    // 'number.max': 'Username must be less than or equal to ',
  }),
  password: Joi.string().alphanum().min(6).max(30).required().messages({
    'string.alphanum': 'Password must only contain alpha-numeric characters',
    'string.min': 'Password must be at least 6 characters long',
    'string.max': 'Password must be less than or equal to 15 characters long',
    'any.required': 'Password is required',
    'string.empty': 'Password is not allowed to be empty',
  }),
  email: Joi.string()
    .email()
    .min(3)
    .max(30)
    .optional()
    .messages({ 'string.email': 'Email must be a valid' }),
  phonenumber: Joi.string().min(10).max(13).optional().messages({
    'string.min': 'Phonenumber must be at least 10 characters long',
    'string.max':
      'Phonenumber must be less than or equal to 13 characters long',
  }),
});
