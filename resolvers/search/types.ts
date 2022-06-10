import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  SearchResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "SearchResults";

      return type;
    },
  },
  CollectionsTypes: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.email) type = "User";
      else if (data.description) type = "Product";
      else type = "Category";

      return type;
    },
  },
};

export default resolvers;
