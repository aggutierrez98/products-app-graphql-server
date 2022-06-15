"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetProductsResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "GetProductsResults";
            return type;
        },
    },
    ProductResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "Product";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map