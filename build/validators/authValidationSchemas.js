"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginv = exports.credentials = void 0;
const joi_1 = __importDefault(require("joi"));
var validationHelpers_1 = require("./validationHelpers");
Object.defineProperty(exports, "credentials", { enumerable: true, get: function () { return validationHelpers_1.areValidCredentials; } });
exports.loginv = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().alphanum().min(6).max(20).required(),
});
//# sourceMappingURL=authValidationSchemas.js.map