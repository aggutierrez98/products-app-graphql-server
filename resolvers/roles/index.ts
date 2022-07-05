import { IResolvers } from "@graphql-tools/utils";
// import mutations from "./mutations";
import types from "./types";
import queries from "./queries";

const resolversObject: IResolvers = {
  // ...mutations,
  ...queries,
  ...types,
};

export default resolversObject;
