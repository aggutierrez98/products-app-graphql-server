//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  GetCategoriesResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.categories) type = "GetCategoriesResults";
      else type = "InputError";

      return type;
    },
  },
  CategoryResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.name) type = "Category";
      else type = "InputError";

      return type;
    },
  },
};

export default resolvers;
