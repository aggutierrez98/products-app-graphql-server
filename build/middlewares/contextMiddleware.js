"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextMiddleware = void 0;
const constants_1 = require("../constants");
const validate_jwt_1 = require("./validate-jwt");
const validate_roles_1 = require("./validate-roles");
const contextMiddleware = ({ req, }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body.query;
    const isAuthQuery = constants_1.NOT_AUTH_QUERIES.some((route) => query.includes(route));
    try {
        if (!isAuthQuery) {
            const { error, data } = yield (0, validate_jwt_1.validateJWT)(req);
            if (error) {
                return { user: data, error: { message: error } };
            }
            if (data) {
                const [isValidRole, message] = yield (0, validate_roles_1.validateRole)(data, query);
                if (isValidRole) {
                    return {
                        user: data,
                        error: null,
                    };
                }
                return {
                    user: null,
                    error: message ? { message } : null,
                };
            }
            return { user: data, error: null };
        }
        else {
            return { user: null, error: null };
        }
    }
    catch (err) {
        console.log({ err });
        return { user: null, error: { message: "An unexpected error ocurred" } };
    }
});
exports.contextMiddleware = contextMiddleware;
//# sourceMappingURL=contextMiddleware.js.map