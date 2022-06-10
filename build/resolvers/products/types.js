"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetProductsResponse: {
        __resolveType: (data) => {
            let type;
            if (data.products)
                type = "GetProductsResults";
            else
                type = "InputError";
            return type;
        },
    },
    ProductResponse: {
        __resolveType: (data) => {
            let type;
            if (data.name)
                type = "Product";
            else
                type = "InputError";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map