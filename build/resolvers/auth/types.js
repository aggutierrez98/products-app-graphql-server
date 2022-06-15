"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    AuthResponse: {
        __resolveType: (data) => {
            let type;
            if (data.error)
                type = "InputError";
            else
                type = "AuthResults";
            return type;
        },
    },
};
exports.default = resolvers;
//# sourceMappingURL=types.js.map