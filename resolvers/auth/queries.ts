import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
// import { renewToken } from "../../database/auth";
import { ContextInterface } from "../../interfaces";
import { User } from "../../models";

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
    // async renewToken(_: void, { error: contextError }): UserResults {
    //   if (contextError) return { error: contextError };

    //   return context.user;
    // },
  },
};

export default query;
