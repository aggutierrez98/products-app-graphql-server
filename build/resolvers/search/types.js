"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    SearchResponse: {
        __resolveType: (data) => {
            let type;
            if (data.results)
                type = "SearchResults";
            else
                type = "InputError";
            return type;
        },
    },
    CollectionsTypes: {
        __resolveType: (data) => {
            let type;
            if (data.email)
                type = "User";
            else if (data.description)
                type = "Product";
            else
                type = "Category";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map