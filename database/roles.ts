import { RoleSchema, Role } from "../models";

export const getRoles = async (): Promise<[number, Role[]]> => {
  const query = { active: true };

  const [total, roles] = await Promise.all([
    RoleSchema.countDocuments(query),
    RoleSchema.find(query),
    // //   .skip(skip)
    // //   .limit(limit),
  ]);
  return [total, roles];
};
