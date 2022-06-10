//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  GetUsersResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.users) type = "GetUsersResults";
      else type = "InputError";

      return type;
    },
  },
};

export default resolvers;
