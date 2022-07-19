import { IResolvers } from "@graphql-tools/utils";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../database/products";
import { ContextInterface } from "../../interfaces";
import { Product } from "../../models";
import { InputError } from "../../interfaces/index";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createProduct(
      __: void,
      { product },
      { error: contextError }
    ): Promise<Product | InputError> {
      // if (contextError) return { error: contextError };
      if (contextError) throw contextError.message;
      const { ok, error, data } = await createProduct(product);

      if (ok) {
        return data!;
      } else {
        throw error!.message;
        // return { error: error! };
      }
    },
    async updateProduct(
      __: void,
      { product },
      { error: contextError }
    ): Promise<Product | InputError> {
      // if (contextError) return { error: contextError };
      if (contextError) throw contextError.message;
      const { ok, error, data } = await updateProduct(product);

      if (ok) {
        return data!;
      } else {
        throw error!.message;
        // return { error: error! };
      }
    },
    async deleteProduct(
      __: void,
      { id },
      { error: contextError }
    ): Promise<Product | InputError> {
      // if (contextError) return { error: contextError };
      if (contextError) throw contextError.message;
      const { ok, error, data } = await deleteProduct(id);

      if (ok) {
        return data!;
      } else {
        throw error!.message;
        // return { error: error! };
      }
    },
  },
};

export default mutation;
