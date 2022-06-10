"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletev = exports.updatev = exports.createv = exports.getv = void 0;
const joi_1 = __importDefault(require("joi"));
const validationHelpers_1 = require("./validationHelpers");
const validationHelpers_2 = require("./validationHelpers");
exports.getv = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.productExists),
});
exports.createv = joi_1.default.object({
    name: joi_1.default.string().min(6).max(30).required().external(validationHelpers_2.productAlreadyExists),
    description: joi_1.default.string().min(10).max(100),
    price: joi_1.default.number().required(),
    user: joi_1.default.string().hex().length(24).required().external(validationHelpers_2.userExists),
    category: joi_1.default.string().hex().length(24).required().external(validationHelpers_2.categoryExists),
});
exports.updatev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.productExists),
    name: joi_1.default.string().min(6).max(30),
    description: joi_1.default.string().min(10).max(100),
    price: joi_1.default.number(),
    user: joi_1.default.string().hex().length(24).external(validationHelpers_2.userExists),
    category: joi_1.default.string().hex().length(24).external(validationHelpers_2.categoryExists),
});
exports.deletev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.productExists),
});
//# sourceMappingURL=productValidationSchemas.js.map