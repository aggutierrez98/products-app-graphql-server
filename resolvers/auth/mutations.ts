import { IResolvers } from "@graphql-tools/utils";
import { login, googleSignIn } from "../../database/auth";
import { ContextInterface, UserResults } from "../../interfaces";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async login(
      __: void,
      { email, password },
      { error: contextError }
    ): UserResults {
      if (contextError) return { error: contextError };

      const { ok, error, data } = await login({ email, password });

      if (ok) {
        return data!;
      } else {
        return { error: error! };
      }
    },
    async googleSignIn(
      __: void,
      { id_token },
      { error: contextError }
    ): UserResults {
      if (contextError) return { error: contextError };

      const { ok, error, data } = await googleSignIn(id_token);

      if (ok) {
        return data!;
      } else {
        return { error: error! };
      }
    },
  },
};

export default mutation;
