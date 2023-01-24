import { QUERIES_BY_ROLE, VALID_ROLES } from "../constants/index";
import { Role } from "../models/role";
import { ForbiddenError, UserInputError } from "apollo-server-express";

export const validateRole = async (
  userRole: Role,
  operationName: string
): Promise<[boolean, any]> => {
  if (!userRole) return [false, new UserInputError("Role don't exists")];

  const userRoleName = userRole.name as VALID_ROLES;

  if (!Object.values(VALID_ROLES).includes(userRoleName)) {
    return [false, new UserInputError(`Role ${userRoleName} is not valid`)];
  }

  const isQueryAllowed = QUERIES_BY_ROLE[`${userRoleName}`]?.some(
    (query) => operationName.toLowerCase() === query.toLowerCase()
  );

  if (!isQueryAllowed)
    return [
      false,
      new ForbiddenError(`Operation not allowed for ${userRoleName}`),
    ];

  return [true, null];
};
