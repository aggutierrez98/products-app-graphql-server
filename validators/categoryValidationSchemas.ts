import joi from "joi";
import {
  categoryAlreadyExists,
  categoryExists,
  userExists,
} from "./validationHelpers";

export const getv = joi.object({
  id: joi.string().hex().length(24).required().external(categoryExists),
});

export const createv = joi.object({
  name: joi
    .string()
    .min(6)
    .max(30)
    .alphanum()
    .required()
    .external(categoryAlreadyExists),
  user: joi.string().length(24).required().external(userExists),
});

export const updatev = joi.object({
  id: joi.string().hex().length(24).required().external(categoryExists),
  name: joi.string().alphanum(),
  user: joi.string().alphanum().external(userExists),
});

export const deletev = joi.object({
  id: joi.string().hex().length(24).required().external(categoryExists),
});

// .error((errors: any) => {
//   errors.forEach((err: any) => {
//     switch (err.code) {
//       case "any.required":
//         err.message = `Key: "${err.local.label}" is required`;
//         break;
//       case "string.alphanum":
//         err.message = `Key: "${err.local.label}" must have valid format`;
//         break;
//       case "string.empty":
//         err.message = `Key: "${err.local.label}" should not be empty`;
//         break;
//       case "string.empty":
//         err.message = `Key: "${err.local.label}" should not be empty`;
//         break;
//       case "string.min":
//         err.message = `Key: "${err.local.label}" should have at least ${err.local.limit} characters`;
//         break;
//       case "string.max":
//         err.message = `Key: "${err.local.label}" should have at most ${err.local.limit} characters`;
//         break;
//       default:
//         break;
//     }
//   });
//   return errors;
// }),
