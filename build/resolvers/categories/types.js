"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetCategoriesResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "GetCategoriesResults";
            return type;
        },
    },
    CategoryResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "Category";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map