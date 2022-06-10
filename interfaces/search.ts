import { DatabaseServiceResponse, InputError } from ".";
import { Category, User } from "../models";
import { Product } from "../models/product";

interface SearchResults {
  results: Product[] | Category[] | User[] | null;
}

export type SearchResponse = Promise<SearchResults | InputError>;

export interface SearchServiceResponse extends DatabaseServiceResponse {
  results: Product[] | Category[] | User[] | null;
}
