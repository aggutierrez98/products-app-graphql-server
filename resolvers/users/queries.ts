import { IResolvers } from "@graphql-tools/utils";
import { getUser, getUsers } from "../../database/users";
import { ContextInterface, InputError } from "../../interfaces";
import { User } from "../../models";
// import { UserResults } from "../../interfaces/users";

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
      if (contextError) throw contextError.message;

      const [count, users] = await getUsers(params);
      return {
        users,
        count,
      };
    },
    async getUser(_: void, { id }, { error: contextError }): Promise<User> {
      if (contextError) throw new Error(contextError!.message);

      const { data, error, ok } = await getUser(id);

      if (ok) {
        return data.user!;
      } else {
        // return { error: error! };
        throw new Error(error!.message);
      }
    },
  },
};

export default query;
