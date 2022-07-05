import { RoleSchema, User } from "../models";
import { QUERIES_BY_ROLE, VALID_ROLES } from "../constants/index";
import { Role } from "../models/role";

export const validateRole = async (
  userRole: Role,
  query: string
): Promise<[boolean, string | null]> => {
  if (!userRole) return [false, "Role not exists"];

  const userRoleName = userRole.name as VALID_ROLES;

  if (!Object.values(VALID_ROLES).includes(userRoleName)) {
    return [false, `Role ${userRoleName} is not valid`];
  }

  const isQueryAllowed = QUERIES_BY_ROLE[`${userRoleName}`]?.some((route) =>
    query.includes(route)
  );

  if (!isQueryAllowed)
    return [false, `Operation not allowed for ${userRoleName}`];

  return [true, null];
};
