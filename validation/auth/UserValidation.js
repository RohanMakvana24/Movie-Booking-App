import Joi from "joi";

export const RagisterSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) // Validates that the email has a valid format
    .required() // Email is required
    .messages({
      "string.email": "Invalid email format",
      "string.empty": "Email is required",
    }),
  password: Joi.string()
    .pattern(/^[A-Z]/) // Password must start with an uppercase letter
    .pattern(/[A-Z]/) // At least one uppercase letter
    .pattern(/[a-z]/) // At least one lowercase letter
    .pattern(/[0-9]/) // At least one digit
    .pattern(/[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-]/) // At least one special character
    .min(8) // Minimum length of 8 characters
    .max(20) // Maximum length of 20 characters
    .required() // Password is required
    .messages({
      "string.pattern.base":
        "Password must start with an uppercase letter, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password must be at most 20 characters long",
      "string.empty": "Password is required",
    }),
});
