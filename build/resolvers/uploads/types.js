"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GraphQLUpload_js_1 = __importDefault(require("graphql-upload/GraphQLUpload.js"));
const resolvers = {
    Upload: GraphQLUpload_js_1.default,
    UploadImageResponse: {
        __resolveType: (data) => {
            let type;
            if (data.imagePath)
                type = "ImageResponse";
            else
                type = "InputError";
            return type;
        },
    },
    UploadResponse: {
        __resolveType: (data) => {
            let type;
            if (data.message)
                type = "InputError";
            else if (data.email)
                type = "User";
            else
                type = "Product";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map