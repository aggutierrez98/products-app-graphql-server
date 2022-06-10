import types from "./types";
import mutations from "./mutations";
import { IResolvers } from "@graphql-tools/utils";

const resolversObject: IResolvers = {
  ...mutations,
  ...types,
};

export default resolversObject;
