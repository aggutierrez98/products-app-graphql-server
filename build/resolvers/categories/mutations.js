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
const mutation = {
    Mutation: {
        createCategory(_, { category }, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const { ok, error, data } = yield (0, categories_1.createCategory)(category);
                if (ok) {
                    return data;
                }
                else {
                    return { error: error };
                }
            });
        },
        updateCategory(__, { category }, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const { ok, error, data } = yield (0, categories_1.updateCategory)(category);
                if (ok) {
                    return data;
                }
                else {
                    return { error: error };
                }
            });
        },
        deleteCategory(__, { id }, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const { ok, error, data } = yield (0, categories_1.deleteCategory)(id);
                if (ok) {
                    return data;
                }
                else {
                    return { error: error };
                }
            });
        },
    },
};
exports.default = mutation;
//# sourceMappingURL=mutations.js.map