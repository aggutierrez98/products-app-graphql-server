"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    UserResponse: {
        __resolveType: (data) => {
            let type;
            if (data.name)
                type = "User";
            else
                type = "InputError";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map