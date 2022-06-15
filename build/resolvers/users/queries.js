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
const users_1 = require("../../database/users");
const query = {
    Query: {
        getUsers(_, params, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const [count, users] = yield (0, users_1.getUsers)(params);
                return {
                    users,
                    count,
                };
            });
        },
        getUser(_, { id }, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    throw new Error(contextError.message);
                const { data, error, ok } = yield (0, users_1.getUser)(id);
                if (ok) {
                    return data.user;
                }
                else {
                    throw new Error(error.message);
                }
            });
        },
    },
};
exports.default = query;
//# sourceMappingURL=queries.js.map