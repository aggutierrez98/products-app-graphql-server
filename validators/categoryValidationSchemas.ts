import joi from "joi";
import { validateErrors } from "../helpers/validationErrorHelper";
import {
  categoryAlreadyExists,
  categoryExists,
  userExists,
} from "./validationHelpers";

export const getv = joi
  .object({
    id: joi.string().hex().length(24).required().external(categoryExists),
  })
  .error(validateErrors);

export const createv = joi
  .object({
    name: joi
      .string()
      .min(6)
      .max(30)
      .alphanum()
      .required()
      .external(categoryAlreadyExists),
    user: joi.string().length(24).required().external(userExists),
  })
  .error(validateErrors);

export const updatev = joi
  .object({
    id: joi.string().hex().length(24).required().external(categoryExists),
    name: joi.string().alphanum(),
    user: joi.string().alphanum().external(userExists),
  })
  .error(validateErrors);

export const deletev = joi
  .object({
    id: joi.string().hex().length(24).required().external(categoryExists),
  })
  .error(validateErrors);
