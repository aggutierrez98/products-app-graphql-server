import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import {
  activateUser,
  createUser,
  deleteUser,
  updateUser,
} from "../../database/users";
import { ContextInterface, AuthResults } from "../../interfaces/index";
import { User } from "../../models";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createUser(__: void, { user }, { error: contextError }): AuthResults {
      if (contextError) throw contextError;

      const { ok, error, data } = await createUser(user);

      if (ok) return data!;
      else throw error;
    },

    async updateUser(
      __: void,
      { user },
      { error: contextError }
    ): Promise<User> {
      if (contextError) throw contextError;

      const { ok, error, data } = await updateUser(user);

      if (ok) return data.user!;
      else throw error;
    },

    async deleteUser(__: void, { id }, { error: contextError }): Promise<User> {
      if (contextError) throw contextError;

      const { ok, error, data } = await deleteUser(id);

      if (ok) return data.user!;
      else throw error;
    },

    async activateUser(
      __: void,
      { id },
      { error: contextError }
    ): Promise<User> {
      if (contextError) throw contextError;

      const { ok, error, data } = await activateUser(id);

      if (ok) return data.user!;
      else throw error;
    },
  },
};

export default mutation;
