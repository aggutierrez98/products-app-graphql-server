import joi from "joi";
import { roleExists, userAlreadyExists, userExists } from "./validationHelpers";

// export const getvalidation = joi.object({
//   id: joi.string().hex().length(24).required().external(userExists),
// });

export const createv = joi.object({
  name: joi.string().min(6).max(30).alphanum().required(),
  email: joi.string().email().required().external(userAlreadyExists),
  password: joi.string().alphanum().min(6).max(20).required(),
  role: joi.string().hex().length(24).required().external(roleExists),
});

export const updatev = joi.object({
  id: joi.string().hex().length(24).required().external(userExists),
  name: joi.string().min(6).max(30).alphanum(),
  password: joi.string().alphanum().min(6).max(20),
  role: joi.string().hex().length(24).external(roleExists),
});

export const deletev = joi.object({
  id: joi.string().hex().length(24).required().external(userExists),
});
