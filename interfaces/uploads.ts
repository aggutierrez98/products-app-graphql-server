import { DatabaseServiceResponse, InputError } from ".";
import { User } from "../models";
import { Product } from "../models/product";

export interface UploadServiceResponse extends DatabaseServiceResponse {
  data: { imagePath: string } | null;
}
export interface UpdateServiceResponse extends DatabaseServiceResponse {
  data: Product | User | null;
}

export type UploadImageResponse = Promise<
  { imagePath: string } | null | InputError
>;
export type UpdateImageResponse = Promise<Product | User | null | InputError>;
