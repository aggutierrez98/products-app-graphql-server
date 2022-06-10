//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  GetCategoriesResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "GetCategoriesResults";

      return type;
    },
  },
  CategoryResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "Category";

      return type;
    },
  },
};

export default resolvers;
