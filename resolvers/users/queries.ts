import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import { getUser, getUsers } from "../../database/users";
import { ContextInterface, GetUsersResult } from "../../interfaces";
import { User } from "../../models";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getUsers(
      _: void,
      params,
      { error: contextError }
    ): Promise<GetUsersResult> {
      if (contextError) throw contextError;

      const [count, users] = await getUsers(params);
      return {
        users,
        count,
      };
    },
    async getUser(_: void, { id }, { error: contextError }): Promise<User> {
      if (contextError) throw contextError;

      const { data, error, ok } = await getUser(id);

      if (ok) return data.user!;
      else throw error;
    },
  },
};

export default query;
