import { IResolvers } from "@graphql-tools/utils";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../database/products";
import { ContextInterface } from "../../interfaces";
import { Product } from "../../models";
import { InputError } from "../../interfaces/index";
import { ForbiddenError } from "apollo-server-express";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createProduct(
      __: void,
      { product },
      { error: contextError }
    ): Promise<Product | InputError> {
      if (contextError) throw contextError;
      const { ok, error, data } = await createProduct(product);

      if (ok) return data!;
      else throw error;
    },
    async updateProduct(
      __: void,
      { product },
      { error: contextError }
    ): Promise<Product | InputError> {
      if (contextError) throw contextError;
      const { ok, error, data } = await updateProduct(product);

      if (ok) return data!;
      else throw error;
    },
    async deleteProduct(
      __: void,
      { id },
      { error: contextError }
    ): Promise<Product | InputError> {
      if (contextError) throw contextError;
      const { ok, error, data } = await deleteProduct(id);

      if (ok) return data!;
      else throw error;
    },
  },
};

export default mutation;
