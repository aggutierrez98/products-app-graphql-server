"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERIES_BY_ROLE = exports.VALID_ROLES = exports.NOT_AUTH_QUERIES = exports.ALLOWED_COLLECTIONS = void 0;
exports.ALLOWED_COLLECTIONS = [
    "users",
    "categories",
    "products",
];
exports.NOT_AUTH_QUERIES = ["login", "createUser", "googleSignIn"];
var VALID_ROLES;
(function (VALID_ROLES) {
    VALID_ROLES["ADMIN_ROLE"] = "ADMIN_ROLE";
    VALID_ROLES["VENTAS_ROLE"] = "VENTAS_ROLE";
    VALID_ROLES["USER_ROLE"] = "USER_ROLE";
})(VALID_ROLES = exports.VALID_ROLES || (exports.VALID_ROLES = {}));
const USER_ROLE_QUERIES = [
    "getUsers",
    "getCategories",
    "getProducts",
    "createUser",
    "updateUser",
];
const VENTAS_ROLE_QUERIES = [
    ...USER_ROLE_QUERIES,
    "createCategory",
    "updateCategory",
    "deleteCategory",
    "createProduct",
    "updateProduct",
    "deleteProduct",
    "updateImage",
    "updateImageCloudinary",
];
const ADMIN_ROLE_QUERIES = [
    ...VENTAS_ROLE_QUERIES,
    "deleteUser",
    "uploadImage",
];
exports.QUERIES_BY_ROLE = {
    ADMIN_ROLE: ADMIN_ROLE_QUERIES,
    VENTAS_ROLE: VENTAS_ROLE_QUERIES,
    USER_ROLE: USER_ROLE_QUERIES,
};
//# sourceMappingURL=index.js.map