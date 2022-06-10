import { IResolvers } from "@graphql-tools/utils";
import mutations from "./mutations";
import types from "./types";

const resolversObject: IResolvers = {
    ...mutations,
    ...types
};

export default resolversObject;
