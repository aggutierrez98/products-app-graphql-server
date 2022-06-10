import { IResolvers } from "@graphql-tools/utils";
import { getUsers } from "../../database/users";
import { ContextInterface, InputError } from "../../interfaces";
import { User } from "../../models";

interface GetUsersResult {
  users: User[];
  count: number;
}

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getUsers(
      _: void,
      params,
      { error: contextError }
    ): Promise<GetUsersResult | InputError> {
      if (contextError) return { error: contextError };

      const [count, users] = await getUsers(params);
      return {
        users,
        count,
      };
    },
  },
};

export default query;
