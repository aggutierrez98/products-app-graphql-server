import { DatabaseServiceResponse, InputError } from ".";
import { Category } from "../models/category";
import { Role } from "../models/role";

export interface GetRolesResults {
  roles: Role[];
  count: number;
}

export interface RoleServiceResponse extends DatabaseServiceResponse {
  data: Category | null;
}
