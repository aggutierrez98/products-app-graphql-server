import { IResolvers } from "@graphql-tools/utils";
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
      if (contextError) throw contextError.message;
      const [count, products] = await getProducts(params);
      return { products, count };
    },
    async getProduct(_: void, { id }, { error: contextError }): ProductResults {
      if (contextError) throw contextError.message;
      const { data, error, ok } = await getProduct(id);

      if (ok) {
        return data!;
      } else {
        throw error!.message;
      }
    },
  },
};

export default query;
