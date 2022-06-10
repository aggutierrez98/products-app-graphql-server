import { IResolvers } from "@graphql-tools/utils";
import { createUser, deleteUser, updateUser } from "../../database/users";
import { User } from "../../models";
import { ContextInterface, InputError } from "../../interfaces/index";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createUser(__: void, { user }, { error }): Promise<User | InputError> {
      if (error) return error;

      const { ok, msg, data } = await createUser(user);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async updateUser(__: void, { user }, { error }): Promise<User | InputError> {
      if (error) return error;

      const { ok, msg, data } = await updateUser(user);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async deleteUser(__: void, { id }, { error }): Promise<User | InputError> {
      if (error) return error;

      const { ok, msg, data } = await deleteUser(id);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default mutation;
