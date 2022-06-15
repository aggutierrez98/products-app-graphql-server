"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletev = exports.updatev = exports.createv = exports.getv = void 0;
const joi_1 = __importDefault(require("joi"));
const validationHelpers_1 = require("./validationHelpers");
exports.getv = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.userExists),
});
exports.createv = joi_1.default.object({
    name: joi_1.default.string().min(6).max(30).alphanum().required(),
    email: joi_1.default.string().email().required().external(validationHelpers_1.userAlreadyExists),
    password: joi_1.default.string().alphanum().min(6).max(20).required(),
    role: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.roleExists),
});
exports.updatev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.userExists),
    name: joi_1.default.string().min(6).max(30).alphanum(),
    password: joi_1.default.string().alphanum().min(6).max(20),
    role: joi_1.default.string().hex().length(24).external(validationHelpers_1.roleExists),
});
exports.deletev = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required().external(validationHelpers_1.userExists),
});
//# sourceMappingURL=userValidationSchemas.js.map