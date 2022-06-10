"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadv = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_1 = require("../constants");
exports.uploadv = joi_1.default.object({
    id: joi_1.default.string().hex().length(24).required(),
    collection: joi_1.default
        .string()
        .valid(...constants_1.ALLOWED_COLLECTIONS)
        .required(),
});
//# sourceMappingURL=uploadValidationSchema.js.map