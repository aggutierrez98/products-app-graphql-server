import { IResolvers } from "@graphql-tools/utils";
import { getRoles } from "../../database/roles";
import { ContextInterface } from "../../interfaces";
import { RolesResults } from "../../interfaces/roles";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getRoles(_, __, { error: contextError }): RolesResults {
      if (contextError) throw contextError.message;
      const [count, roles] = await getRoles();
      return { roles, count };
    },
  },
};

export default query;
