import { IResolvers } from "@graphql-tools/utils";
import queries from "./queries";

const resolversObject: IResolvers = {
  // ...mutations,
  ...queries,
};

export default resolversObject;
