//@ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  Upload: GraphQLUpload,
  UploadResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.email) type = "User";
      else type = "Product";

      return type;
    },
  },
};

export default resolvers;
