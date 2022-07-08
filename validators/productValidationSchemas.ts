import joi from "joi";
import { productExists } from "./validationHelpers";
import {
  categoryExists,
  productAlreadyExists,
  userExists,
} from "./validationHelpers";

export const getv = joi.object({
  id: joi.string().hex().length(24).required().external(productExists),
});

export const createv = joi.object({
  name: joi.string().min(6).max(30).required().external(productAlreadyExists),
  description: joi.string().min(0).max(100),
  price: joi.number().required(),
  user: joi.string().hex().length(24).required().external(userExists),
  category: joi.string().hex().length(24).required().external(categoryExists),
});

export const updatev = joi.object({
  id: joi.string().hex().length(24).required().external(productExists),
  name: joi.string().min(6).max(30),
  description: joi.string().min(10).max(100),
  price: joi.number(),
  user: joi.string().hex().length(24).external(userExists),
  category: joi.string().hex().length(24).external(categoryExists),
});

export const deletev = joi.object({
  id: joi.string().hex().length(24).required().external(productExists),
});
