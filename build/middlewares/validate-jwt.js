"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../models");
const validateJWT = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["x-token"];
        if (!token)
            return {
                error: "Must be authenticated",
                data: null,
            };
        const uid = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY).uid;
        const user = yield models_1.UserSchema.findById(uid);
        if (!user)
            return {
                error: "You must be logged in",
                data: null,
            };
        if (!(user === null || user === void 0 ? void 0 : user.active))
            return {
                error: "Invalid token: user not active",
                data: null,
            };
        return { data: user, error: null };
    }
    catch (err) {
        console.log(err);
        return {
            error: "Invalid token: expired or malformed",
            data: null,
        };
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.js.map