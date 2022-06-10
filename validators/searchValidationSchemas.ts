import joi from "joi";
import { ALLOWED_COLLECTIONS } from "../constants";

export const searchv = joi.object({
  //   collection: joi.string().valid("categories", "users", "products").required(),
  collection: joi
    .string()
    .valid(...ALLOWED_COLLECTIONS)
    .required(),
  term: joi.string().min(1).alphanum().max(30).required(),
});
