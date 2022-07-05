import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  GetRolesResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.error) type = "InputError";
      else type = "GetRolesResults";

      return type;
    },
  },
};

export default resolvers;
