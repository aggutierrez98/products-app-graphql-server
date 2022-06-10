import joi from "joi";
import { ALLOWED_COLLECTIONS } from "../constants";

export const uploadv = joi.object({
  id: joi.string().hex().length(24).required(),
  collection: joi
    .string()
    .valid(...ALLOWED_COLLECTIONS)
    .required(),
});
