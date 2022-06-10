import { IResolvers } from "@graphql-tools/utils";
import { getCategories, getCategory } from "../../database/categories";
import { ContextInterface, InputError } from "../../interfaces";
import { Category } from "../../models";

interface GetCategoriesResult {
  categories: Category[];
  count: number;
}

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getCategories(
      _: void,
      params,
      { error }
    ): Promise<GetCategoriesResult | InputError> {
      if (error) return error;

      const [count, categories] = await getCategories(params);
      return { categories, count };
    },
    async getCategory(
      _: void,
      { id },
      { error }
    ): Promise<Category | InputError> {
      if (error) return error;

      const { data, msg, ok } = await getCategory(id);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default query;
