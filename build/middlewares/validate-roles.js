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
exports.validateRole = void 0;
const models_1 = require("../models");
const index_1 = require("../constants/index");
const validateRole = (user, query) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userRole = yield models_1.RoleSchema.findById(user.role);
    if (!userRole)
        return [false, "Role not exists"];
    const userRoleName = userRole.name;
    if (!Object.values(index_1.VALID_ROLES).includes(userRoleName)) {
        return [false, `Role ${userRoleName} is not valid`];
    }
    const isQueryAllowed = (_a = index_1.QUERIES_BY_ROLE[`${userRoleName}`]) === null || _a === void 0 ? void 0 : _a.some((route) => query.includes(route));
    if (!isQueryAllowed)
        return [false, `Operation not allowed for ${userRoleName}`];
    return [true, null];
});
exports.validateRole = validateRole;
//# sourceMappingURL=validate-roles.js.map