import types from "./types";
import queries from "./queries";
import { IResolvers } from "@graphql-tools/utils";

const resolversObject: IResolvers = {
  ...queries,
  ...types,
};

export default resolversObject;
