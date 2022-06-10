"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchv = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("../constants");
exports.searchv = joi_1.default.object({
    collection: joi_1.default
        .string()
        .valid(...constants_1.ALLOWED_COLLECTIONS)
        .required(),
    term: joi_1.default.string().min(1).alphanum().max(30).required(),
});
//# sourceMappingURL=searchValidationSchemas.js.map