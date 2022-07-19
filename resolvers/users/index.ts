import queries from "./queries";
import mutations from "./mutations";
import { IResolvers } from "@graphql-tools/utils";

const resolversObject: IResolvers = {
  ...queries,
  ...mutations,
};

export default resolversObject;
