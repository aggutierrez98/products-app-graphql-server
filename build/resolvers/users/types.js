"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    GetUsersResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "GetUsersResults";
            return type;
        },
    },
    UserResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "User";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map