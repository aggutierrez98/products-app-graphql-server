//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  GetUsersResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "GetUsersResults";

      return type;
    },
  },
  UserResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "User";

      return type;
    },
  },
};

export default resolvers;
