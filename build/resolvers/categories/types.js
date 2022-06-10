"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetCategoriesResponse: {
        __resolveType: (data) => {
            let type;
            if (data.categories)
                type = "GetCategoriesResults";
            else
                type = "InputError";
            return type;
        },
    },
    CategoryResponse: {
        __resolveType: (data) => {
            let type;
            if (data.name)
                type = "Category";
            else
                type = "InputError";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map