//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  AuthResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "AuthResults"

      return type;
    },
  },
};

export default resolvers;
