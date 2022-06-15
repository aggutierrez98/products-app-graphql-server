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
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSignIn = exports.login = void 0;
const models_1 = require("../models");
const helpers_1 = require("../helpers");
const google_verify_1 = require("../helpers/google-verify");
const validators_1 = require("../validators");
const login = (params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = params;
        validators_1.AuthInputValidator.loginv.valid(params);
        const user = yield validators_1.AuthInputValidator.credentials(email, password);
        const token = yield (0, helpers_1.generateJWT)(user.id);
        return {
            error: null,
            ok: true,
            data: { user, token },
        };
    }
    catch (error) {
        return {
            ok: false,
            error: { message: error.message },
            data: { user: null, token: null },
        };
    }
});
exports.login = login;
const googleSignIn = (id_token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, image } = yield (0, google_verify_1.googleVerify)(id_token);
        let user = yield models_1.UserSchema.findOne({ email }).populate("role");
        if (!user) {
            const data = {
                name,
                email,
                password: "-",
                image,
                google: true,
            };
            user = new models_1.UserSchema(data);
            yield user.save();
        }
        if (!user.active) {
            return {
                error: { message: "Server error: User blocked" },
                ok: false,
                data: { user: null, token: null },
            };
        }
        const token = yield (0, helpers_1.generateJWT)(user.id);
        return {
            error: null,
            ok: true,
            data: { user, token },
            token,
        };
    }
    catch (e) {
        return {
            error: { message: "Google token not valid" },
            ok: false,
            data: { user: null, token: null },
        };
    }
});
exports.googleSignIn = googleSignIn;
//# sourceMappingURL=auth.js.map