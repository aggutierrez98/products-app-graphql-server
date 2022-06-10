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
const products_1 = require("../../database/products");
const mutation = {
    Mutation: {
        createProduct(__, { product }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, products_1.createProduct)(product);
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
        updateProduct(__, { product }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, products_1.updateProduct)(product);
                if (ok) {
                    return data;
                }
                else {
                    return { message: msg };
                }
            });
        },
        deleteProduct(__, { id }, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return error;
                const { ok, msg, data } = yield (0, products_1.deleteProduct)(id);
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