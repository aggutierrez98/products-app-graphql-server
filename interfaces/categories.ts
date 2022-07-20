import { DatabaseServiceResponse, InputError } from ".";
import { Category } from "../models/category";

interface GetCategoriesResult {
  categories: Category[];
  count: number;
}

export type CategoryResults = Promise<GetCategoriesResult | Category>;

export interface CategoryServiceResponse extends DatabaseServiceResponse {
  data: Category | null;
}
