import { IResolvers } from "@graphql-tools/utils";
import { login, googleSignIn } from "../../database/auth";
import { ContextInterface, AuthResults } from "../../interfaces";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async login(
      __: void,
      { email, password },
      { error: contextError }
    ): AuthResults {
      if (contextError) throw contextError;

      const { ok, error, data } = await login({ email, password });

      if (ok) return data!;
      else throw error;
    },
    async googleSignIn(
      __: void,
      { id_token },
      { error: contextError }
    ): AuthResults {
      if (contextError) throw contextError;

      const { ok, error, data } = await googleSignIn(id_token);

      if (ok) return data!;
      else throw error;
    },
  },
};

export default mutation;
