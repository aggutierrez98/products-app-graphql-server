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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../database/config");
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const apollo_server_express_1 = require("apollo-server-express");
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const graphqlUploadExpress_js_1 = __importDefault(require("graphql-upload/graphqlUploadExpress.js"));
const cloudinary_1 = require("cloudinary");
const schema_1 = __importDefault(require("../schema"));
const contextMiddleware_1 = require("../middlewares/contextMiddleware");
class ServerModel {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "5200";
        this.httpServer = (0, http_1.createServer)(this.app);
        this.middlewares();
        this.connectGraphQL();
        this.connectDB();
        this.cloudinaryConfig();
        this.app.get("/", (0, graphql_playground_middleware_express_1.default)({
            endpoint: "/graphql",
        }));
    }
    connectGraphQL() {
        this.server = new apollo_server_express_1.ApolloServer({
            schema: schema_1.default,
            introspection: true,
            csrfPrevention: true,
            context: contextMiddleware_1.contextMiddleware,
        });
        this.server.start().then(() => {
            this.server.applyMiddleware({ app: this.app });
        });
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    cloudinaryConfig() {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    middlewares() {
        this.app.use((0, graphqlUploadExpress_js_1.default)({ maxFileSize: 2 * 1000 * 1000 }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, compression_1.default)());
    }
    listen() {
        this.httpServer.listen({
            port: this.port,
        }, () => {
            console.log(`Server running in: http://localhost:${this.port}`);
        });
    }
}
exports.default = ServerModel;
//# sourceMappingURL=server.js.map