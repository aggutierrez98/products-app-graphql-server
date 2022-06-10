import { IResolvers } from "@graphql-tools/utils";
import CategoriesResolvers from "./categories";
import ProductsResolvers from "./products";
import UsersResolvers from "./users";
import SearchResolvers from "./search";
import UploadResolvers from "./uploads";
import AuthResolvers from "./auth";

const resolvers: IResolvers[] = [
  CategoriesResolvers,
  ProductsResolvers,
  UsersResolvers,
  SearchResolvers,
  UploadResolvers,
  AuthResolvers,
];

export default resolvers;
