import { IResolvers } from "@graphql-tools/utils";
import { ContextInterface } from "../../interfaces";
import { User } from "../../models";
// // import { renewToken } from "../../database/auth";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async currentUser(
      _,
      { error: contextError },
      context
    ): Promise<User | null> {
      if (contextError) throw contextError;
      return context.user;
    },
    // // async renewToken(
    // //   _,
    // //   { error: contextError },
    // //   context
    // // ): Promise<User | null> {
    // //   if (contextError) throw contextError;
    // //   return context.user;
    // // },
  },
};

export default query;
