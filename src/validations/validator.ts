import Joi from "joi";

export const createUserSchema = Joi.object({
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string()
    .min(6)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"))
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Password is required',
      "string.empty": "Password is required",
      "string.pattern.base": "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
    }),
})

export const loginUserSchema = Joi.object({
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string()
    .required()
    .messages({
      'any.required': 'Password is required',
      "string.empty": "Password is required",
    }),
})