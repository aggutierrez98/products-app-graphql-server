import { RoleSchema, User } from "../models";
import { QUERIES_BY_ROLE, VALID_ROLES } from "../constants/index";

export const validateRole = async (
  user: User,
  query: string
): Promise<[boolean, string | null]> => {
  const userRole = await RoleSchema.findById(user.role);

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
