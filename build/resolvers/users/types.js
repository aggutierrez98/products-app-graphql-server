"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetUsersResponse: {
        __resolveType: (data) => {
            let type;
            if (data.users)
                type = "GetUsersResults";
            else
                type = "InputError";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map