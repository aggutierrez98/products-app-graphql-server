// import types from "./types";
import queries from "./queries";
import mutations from "./mutations";
import types from "./types";
import { IResolvers } from "@graphql-tools/utils";

const resolversObject: IResolvers = {
  ...queries,
  ...mutations,
  ...types
};

export default resolversObject;
