import { isValidObjectId } from "mongoose";
import { ALLOWED_COLLECTIONS } from "../constants";
import { SearchServiceResponse } from "../interfaces/search";
import {
  UserSchema,
  CategorySchema,
  ProductSchema,
  User,
  Category,
  Product,
} from "../models";
import { SearchInputValidator } from "../validators";

interface SearchParams {
  term: string;
  collection: typeof ALLOWED_COLLECTIONS[number];
}

const searchUsers = async (searchTerm = ""): Promise<User[]> => {
  const isMongoID = isValidObjectId(searchTerm);

  if (isMongoID) {
    const user = await UserSchema.findById(searchTerm).populate("role");
    return user ? [user] : [];
  }

  const regex = new RegExp(searchTerm, "i");
  const users = await UserSchema.find({
    $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    $and: [{ active: true }],
  }).populate("role");

  return users;
};

const searchCategories = async (searchTerm = ""): Promise<Category[]> => {
  const isMongoID = isValidObjectId(searchTerm);

  if (isMongoID) {
    const category = await CategorySchema.findById(searchTerm).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return category ? [category] : [];
  }

  const regex = new RegExp(searchTerm, "i");
  const categories = await CategorySchema.find({
    name: { $regex: regex },
    active: true,
  }).populate([
    {
      path: "user",
      populate: [{ path: "role" }],
    },
  ]);

  return categories;
};

const searchProducts = async (searchTerm = ""): Promise<Product[]> => {
  const isMongoID = isValidObjectId(searchTerm);

  if (isMongoID) {
    const product = await ProductSchema.findById(searchTerm).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
      {
        path: "category",
        populate: [{ path: "user", populate: [{ path: "role" }] }],
      },
    ]);
    return product ? [product] : [];
  }

  const regex = new RegExp(searchTerm, "i");

  const products = await ProductSchema.find({
    name: { $regex: regex },
    active: true,
  }).populate([
    {
      path: "user",
      populate: [{ path: "role" }],
    },
    {
      path: "category",
      populate: [{ path: "user", populate: [{ path: "role" }] }],
    },
  ]);

  return products;
};

export const search = async (
  params: SearchParams
): Promise<SearchServiceResponse> => {
  let { collection, term } = params;
  let results: any = null;

  try {
    SearchInputValidator.searchv.valid(params);
    switch (collection) {
      case "users":
        results = await searchUsers(term);
        break;
      case "categories":
        results = await searchCategories(term);
        break;
      case "products":
        results = await searchProducts(term);
        break;

      default:
        results = [];
    }

    return {
      ok: true,
      results,
      error: null,
    };
  } catch (error: any) {
    return {
      ok: false,
      results,
      error: { message: error.message },
    };
  }
};
