import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./../resolvers/resolversMap";
import "graphql-import-node";

import inputs from "./inputs.graphql";
import queries from "./queries.graphql";
import types from "./types.graphql";
import mutations from "./mutations.graphql";
import enums from "./enums.graphql";
import unions from "./unions.graphql";

const typeDefs = [
  ...inputs.definitions,
  ...queries.definitions,
  ...types.definitions,
  ...mutations.definitions,
  ...enums.definitions,
  ...unions.definitions,
];

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
