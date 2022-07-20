import joi from "joi";
import { ALLOWED_COLLECTIONS } from "../constants";
import { validateErrors } from "../helpers/validationErrorHelper";

export const searchv = joi
  .object({
    collection: joi
      .string()
      .valid(...ALLOWED_COLLECTIONS)
      .required(),
    term: joi.string().min(1).alphanum().max(30).required(),
  })
  .error(validateErrors);
