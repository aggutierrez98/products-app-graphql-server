import { IResolvers } from "@graphql-tools/utils";
import { search } from "../../database/search";
import { ContextInterface, InputError } from "../../interfaces";
import { Category, Product, User } from "../../models";

interface SearchResults {
  results: Product[] | Category[] | User[] | null;
}

const resolvers: IResolvers<any, ContextInterface> = {
  Query: {
    async search(
      _: void,
      params,
      { error }
    ): Promise<SearchResults | InputError> {
      if (error) return { message: error.message };

      const { results, msg, ok } = await search(params);

      if (ok) {
        return { results };
      } else {
        return { message: msg };
      }
    },
  },
};

export default resolvers;
