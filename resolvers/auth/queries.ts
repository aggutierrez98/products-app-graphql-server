import { IResolvers } from "@graphql-tools/utils";
// import { renewToken } from "../../database/auth";
import { ContextInterface } from "../../interfaces";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async currentUser(root, { error: contextError }, context) {
      if (contextError) return { error: contextError };

      return context.user;
    },
    // async renewToken(_: void, { error: contextError }): UserResults {
    //   if (contextError) return { error: contextError };

    //   return context.user;
    // },
  },
};

export default query;
