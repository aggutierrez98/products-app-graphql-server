//@ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
  Upload: GraphQLUpload,
  UploadImageResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.imagePath) type = "ImageResponse";
      else type = "InputError";

      return type;
    },
  },
  UploadResponse: {
    __resolveType: (data: any) => {
      let type: string;

      if (data.message) type = "InputError";
      else if (data.email) type = "User";
      else type = "Product";

      return type;
    },
  },
};

export default resolvers;
