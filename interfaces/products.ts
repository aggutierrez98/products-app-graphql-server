import { DatabaseServiceResponse, InputError } from ".";
import { Product } from '../models/product';

interface GetProductsResult {
    products: Product[];
    count: number;
}

export type ProductResults = Promise<GetProductsResult | Product | InputError>

export interface ProductServiceResponse extends DatabaseServiceResponse {
    data: Product | null
}