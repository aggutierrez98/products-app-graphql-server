import joi from "joi";
import { ALLOWED_COLLECTIONS } from "../constants";
import { validateErrors } from "../helpers/validationErrorHelper";

export const uploadv = joi
  .object({
    id: joi.string().hex().length(24).required(),
    collection: joi
      .string()
      .valid(...ALLOWED_COLLECTIONS)
      .required(),
  })
  .error(validateErrors);
