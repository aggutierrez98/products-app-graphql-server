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
    async createProduct(__: void, { product }, { error }): Promise<Product | InputError> {
      if (error) return error;

      const { ok, msg, data } = await createProduct(product);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async updateProduct(__: void, { product }, { error }): Promise<Product | InputError> {
      if (error) return error;

      const { ok, msg, data } = await updateProduct(product);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async deleteProduct(__: void, { id }, { error }): Promise<Product | InputError> {
      if (error) return error;

      const { ok, msg, data } = await deleteProduct(id);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default mutation;
