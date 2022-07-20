import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import { search } from "../../database/search";
import { ContextInterface } from "../../interfaces";
import { SearchResults } from "../../interfaces/search";

const resolvers: IResolvers<any, ContextInterface> = {
  Query: {
    async search(
      _: void,
      params,
      { error: contextError }
    ): Promise<SearchResults> {
      if (contextError) throw contextError;

      const { results, error, ok } = await search(params);

      if (ok) return { results };
      else throw error;
    },
  },
};

export default resolvers;
