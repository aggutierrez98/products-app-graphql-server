import { UserInputError } from "apollo-server-express";
import { RoleFromDB } from "../interfaces/roles";
import { UserFromDB } from "../interfaces/users";

interface Props {
  userId: string;
  loggedUser: UserFromDB;
  userRoleId?: string;
}

export const validateOwnUser = ({ loggedUser, userId, userRoleId }: Props) => {
  const userRole = (loggedUser!.role as RoleFromDB)!;

  if (userRole.name !== "ADMIN_ROLE") {
    if (loggedUser?._id.toString() !== userId) {
      throw new UserInputError(`Operation not allowed for ${userRole.name}`);
    }

    if (userRole._id.toString() !== userRoleId) {
      throw new UserInputError(`Operation not allowed for ${userRole.name}`);
    }
  }
};
