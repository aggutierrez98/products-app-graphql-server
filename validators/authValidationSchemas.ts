import joi from "joi";
import { validateErrors } from "../helpers/validationErrorHelper";
export { areValidCredentials as credentials } from "./validationHelpers";

export const loginv = joi
  .object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(6).max(20).required(),
  })
  .error(validateErrors);
