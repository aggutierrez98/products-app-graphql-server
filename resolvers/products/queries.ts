import { IResolvers } from "@graphql-tools/utils";
import { getProduct, getProducts } from "../../database/products";
import { ContextInterface, InputError } from "../../interfaces";
import { Product } from "../../models";

interface GetProductsResult {
  products: Product[];
  count: number;
}

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getProducts(
      _: void,
      params,
      { error }
    ): Promise<GetProductsResult | InputError> {
      if (error) return { message: error.message };

      const [count, products] = await getProducts(params);
      return { products, count };
    },
    async getProduct(
      _: void,
      { id },
      { error }
    ): Promise<Product | InputError> {
      if (error) return { message: error.message };

      const { data, msg, ok } = await getProduct(id);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default query;
