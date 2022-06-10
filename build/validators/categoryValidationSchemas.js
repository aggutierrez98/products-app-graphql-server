"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletev = exports.updatev = exports.createv = exports.getv = void 0;
const joi_1 = __importDefault(require("joi"));
const validationHelpers_1 = require("./validationHelpers");
exports.getv = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.categoryExists),
});
exports.createv = joi_1.default.object({
    name: joi_1.default
        .string()
        .min(6)
        .max(30)
        .alphanum()
        .required()
        .external(validationHelpers_1.categoryAlreadyExists),
    user: joi_1.default.string().length(24).required().external(validationHelpers_1.userExists),
});
exports.updatev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.categoryExists),
    name: joi_1.default.string().alphanum(),
    user: joi_1.default.string().alphanum().external(validationHelpers_1.userExists),
});
exports.deletev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.categoryExists),
});
//# sourceMappingURL=categoryValidationSchemas.js.map