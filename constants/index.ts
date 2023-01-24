export const ALLOWED_COLLECTIONS: ["users", "categories", "products"] = [
  "users",
  "categories",
  "products",
];

export const NOT_AUTH_QUERIES = ["Login", "CreateUser", "GoogleSignIn"];

export enum VALID_ROLES {
  ADMIN_ROLE = "ADMIN_ROLE",
  MANAGER_ROLE = "MANAGER_ROLE",
  USER_ROLE = "USER_ROLE",
}

const USER_ROLE_QUERIES = [
  "CurrentUser",
  "getUsers",
  "getUser",
  "getCategories",
  "getRoles",
  "getProducts",
  "getProduct",
  "CreateUser",
  "UpdateUser",
  "UpdateImage",
  "UpdateImageCloudinary",
];
const MANAGER_ROLE_QUERIES = [
  ...USER_ROLE_QUERIES,
  "CreateCategory",
  "UpdateCategory",
  "DeleteCategory",
  "CreateProduct",
  "UpdateProduct",
  "DeleteProduct",
];
const ADMIN_ROLE_QUERIES = [
  ...MANAGER_ROLE_QUERIES,
  "DeleteUser",
  "ActivateUser",
  "UploadImage",
];

type RoleQueriesMap = {
  [key in VALID_ROLES]: string[];
};

export const QUERIES_BY_ROLE: RoleQueriesMap = {
  ADMIN_ROLE: ADMIN_ROLE_QUERIES,
  MANAGER_ROLE: MANAGER_ROLE_QUERIES,
  USER_ROLE: USER_ROLE_QUERIES,
};
