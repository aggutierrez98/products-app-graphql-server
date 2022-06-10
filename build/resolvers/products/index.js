"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = __importDefault(require("./queries"));
const mutations_1 = __importDefault(require("./mutations"));
const types_1 = __importDefault(require("./types"));
const resolversObject = Object.assign(Object.assign(Object.assign({}, queries_1.default), mutations_1.default), types_1.default);
exports.default = resolversObject;
//# sourceMappingURL=index.js.map