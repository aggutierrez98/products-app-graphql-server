import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import { getRoles } from "../../database/roles";
import { ContextInterface } from "../../interfaces";
import { GetRolesResults } from "../../interfaces/roles";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getRoles(_, __, { error: contextError }): Promise<GetRolesResults> {
      if (contextError) throw contextError;
      const [count, roles] = await getRoles();
      return { roles, count };
    },
  },
};

export default query;
