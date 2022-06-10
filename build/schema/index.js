"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@graphql-tools/schema");
const resolversMap_1 = __importDefault(require("./../resolvers/resolversMap"));
require("graphql-import-node");
const inputs_graphql_1 = __importDefault(require("./inputs.graphql"));
const queries_graphql_1 = __importDefault(require("./queries.graphql"));
const types_graphql_1 = __importDefault(require("./types.graphql"));
const mutations_graphql_1 = __importDefault(require("./mutations.graphql"));
const typeDefs = [
    ...inputs_graphql_1.default.definitions,
    ...queries_graphql_1.default.definitions,
    ...types_graphql_1.default.definitions,
    ...mutations_graphql_1.default.definitions,
];
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs,
    resolvers: resolversMap_1.default,
});
exports.default = schema;
//# sourceMappingURL=index.js.map