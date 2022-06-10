"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = __importDefault(require("./categories"));
const products_1 = __importDefault(require("./products"));
const users_1 = __importDefault(require("./users"));
const search_1 = __importDefault(require("./search"));
const uploads_1 = __importDefault(require("./uploads"));
const auth_1 = __importDefault(require("./auth"));
const resolvers = [
    categories_1.default,
    products_1.default,
    users_1.default,
    search_1.default,
    uploads_1.default,
    auth_1.default,
];
exports.default = resolvers;
//# sourceMappingURL=resolversMap.js.map