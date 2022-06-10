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
const categories_1 = require("../../database/categories");
const models_1 = require("../../models");
const mutation = {
    Mutation: {
        createCategory(_, { category }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, categories_1.createCategory)(category);
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
        updateCategory(__, { category }, { error, user }) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const isAdminRole = ((_a = (yield models_1.RoleSchema.findById(user === null || user === void 0 ? void 0 : user.role))) === null || _a === void 0 ? void 0 : _a.name) === "ADMIN_ROLE";
                if (!isAdminRole)
                    return { message: "Debe ser administrador" };
                const { ok, msg, data } = yield (0, categories_1.updateCategory)(category);
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
        deleteCategory(__, { id }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, categories_1.deleteCategory)(id);
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