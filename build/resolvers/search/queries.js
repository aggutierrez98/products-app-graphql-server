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
const search_1 = require("../../database/search");
const resolvers = {
    Query: {
        search(_, params, { error }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (error)
                    return { message: error.message };
                const { results, msg, ok } = yield (0, search_1.search)(params);
                if (ok) {
                    return { results };
                }
                else {
                    return { message: msg };
                }
            });
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=queries.js.map