import { IResolvers } from "@graphql-tools/utils";
import { createUser, deleteUser, updateUser } from "../../database/users";
import { ContextInterface, UserResults } from "../../interfaces/index";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createUser(__: void, { user }, { error: contextError }): UserResults {
      if (contextError) return { error: contextError };

      const { ok, error, data } = await createUser(user);

      if (ok) {
        return data.user!;
      } else {
        return { error: error! };
      }
    },
    async updateUser(__: void, { user }, { error: contextError }): UserResults {
      if (contextError) return { error: contextError };

      const { ok, error, data } = await updateUser(user);

      if (ok) {
        return data.user!;
      } else {
        return { error: error! };
      }
    },
    async deleteUser(__: void, { id }, { error: contextError }): UserResults {
      if (contextError) return { error: contextError };

      const { ok, error, data } = await deleteUser(id);

      if (ok) {
        return data.user!;
      } else {
        return { error: error! };
      }
    },
  },
};

export default mutation;
