import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import { getProduct, getProducts } from "../../database/products";
import { ContextInterface } from "../../interfaces";
import { ProductResults } from "../../interfaces/products";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getProducts(
      _: void,
      params,
      { error: contextError }
    ): ProductResults {
      if (contextError) throw contextError;
      const [count, products] = await getProducts(params);
      return { products, count };
    },
    async getProduct(_: void, { id }, { error: contextError }): ProductResults {
      if (contextError) throw contextError;
      const { data, error, ok } = await getProduct(id);

      if (ok) return data!;
      else throw error;
    },
  },
};

export default query;
