//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  UserResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.name) type = "User";
      else type = "InputError";

      return type;
    },
  },
};

export default resolvers;
