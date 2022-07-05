import types from "./types";
import mutations from "./mutations";
import queries from "./queries";
import { IResolvers } from "@graphql-tools/utils";

const resolversObject: IResolvers = {
  ...queries,
  ...mutations,
  ...types,
};

export default resolversObject;
