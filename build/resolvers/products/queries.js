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
const query = {
    Query: {
        getProducts(_, params, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const [count, products] = yield (0, products_1.getProducts)(params);
                return { products, count };
            });
        },
        getProduct(_, { id }, { error: contextError }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (contextError)
                    return { error: contextError };
                const { data, error, ok } = yield (0, products_1.getProduct)(id);
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
exports.default = query;
//# sourceMappingURL=queries.js.map