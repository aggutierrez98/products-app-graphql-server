import { DatabaseServiceResponse, InputError } from ".";
import { Category } from "../models/category";
import { Role } from "../models/role";

interface GetRolesResult {
  roles: Role[];
  count: number;
}

export type RolesResults = Promise<GetRolesResult | InputError>;

export interface RoleServiceResponse extends DatabaseServiceResponse {
  data: Category | null;
}
