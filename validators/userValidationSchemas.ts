import joi from "joi";
import { validateErrors } from "../helpers/validationErrorHelper";
import { roleExists, userAlreadyExists, userExists } from "./validationHelpers";

export const getv = joi
  .object({
    id: joi.string().hex().length(24).required().external(userExists),
  })
  .error(validateErrors);

export const createv = joi
  .object({
    name: joi.string().min(6).max(30).alphanum().required(),
    email: joi.string().email().required().external(userAlreadyExists),
    password: joi.string().alphanum().min(6).max(20).required(),
    role: joi.string().hex().length(24).required().external(roleExists),
  })
  .error(validateErrors);

export const updatev = joi
  .object({
    id: joi.string().hex().length(24).required().external(userExists),
    name: joi.string().min(6).max(30).alphanum(),
    password: joi.string().alphanum().min(6).max(20),
    role: joi.string().hex().length(24).external(roleExists),
  })
  .error(validateErrors);

export const deletev = joi
  .object({
    id: joi.string().hex().length(24).required().external(userExists),
  })
  .error(validateErrors);
