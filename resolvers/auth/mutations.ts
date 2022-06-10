import { IResolvers } from "@graphql-tools/utils";
import { login, googleSignIn } from "../../database/auth";
import { ContextInterface, InputError } from "../../interfaces";
import { User } from "../../models";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async login(
      __: void,
      { email, password },
      { error }
    ): Promise<User | InputError> {
      if (error) return error;

      console.log({ email, password });

      const { ok, msg, data, token } = await login({ email, password });

      console.log({ token });

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async googleSignIn(
      __: void,
      { id_token },
      { error }
    ): Promise<User | InputError> {
      if (error) return error;

      const { ok, msg, data } = await googleSignIn(id_token);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default mutation;
