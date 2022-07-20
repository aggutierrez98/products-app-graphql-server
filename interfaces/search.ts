import { DatabaseServiceResponse, InputError } from ".";
import { Category, User } from "../models";
import { Product } from "../models/product";

export interface SearchResults {
  results: Product[] | Category[] | User[] | null;
}

export interface SearchServiceResponse extends DatabaseServiceResponse {
  results: Product[] | Category[] | User[] | null;
}
