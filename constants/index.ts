export const ALLOWED_COLLECTIONS: ["users", "categories", "products"] = [
  "users",
  "categories",
  "products",
];

export const NOT_AUTH_QUERIES = ["login", "createUser", "googleSignIn"];

export enum VALID_ROLES {
  ADMIN_ROLE = "ADMIN_ROLE",
  VENTAS_ROLE = "VENTAS_ROLE",
  USER_ROLE = "USER_ROLE",
}

const USER_ROLE_QUERIES = [
  "getUsers",
  "getUser",
  "getCategories",
  "getProducts",
  "getProduct",
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

type RoleQueriesMap = {
  [key in VALID_ROLES]: string[];
};

export const QUERIES_BY_ROLE: RoleQueriesMap = {
  ADMIN_ROLE: ADMIN_ROLE_QUERIES,
  VENTAS_ROLE: VENTAS_ROLE_QUERIES,
  USER_ROLE: USER_ROLE_QUERIES,
};
