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
const auth_1 = require("../../database/auth");
const mutation = {
    Mutation: {
        login(__, { email, password }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data, token } = yield (0, auth_1.login)({ email, password });
                console.log({ token });
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
        googleSignIn(__, { id_token }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, auth_1.googleSignIn)(id_token);
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
    },
};
exports.default = mutation;
//# sourceMappingURL=mutations.js.map