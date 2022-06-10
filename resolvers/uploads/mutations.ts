import { IResolvers } from "@graphql-tools/utils";
import {
  updateImage,
  uploadImage,
  updateImageCloudinary,
} from "../../database/uploads";
import { ContextInterface } from "../../interfaces";
import {
  UpdateImageResponse,
  UploadImageResponse,
} from "../../interfaces/uploads";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async uploadImage(
      __: void,
      { image },
      { error: contextError }
    ): UploadImageResponse {
      if (contextError) return { error: contextError };
      const { ok, error, data } = await uploadImage(image);
      if (ok && error) {
        return data!;
      } else {
        return { error: error! };
      }
    },
    async updateImage(
      __: void,
      params,
      { error: contextError }
    ): UpdateImageResponse {
      if (contextError) return { error: contextError };
      const { ok, error, data } = await updateImage(params);
      if (ok) {
        return data!;
      } else {
        return { error: error! };
      }
    },
    async updateImageCloudinary(
      __: void,
      params,
      { error: contextError }
    ): UpdateImageResponse {
      if (contextError) return { error: contextError };
      const { ok, error, data } = await updateImageCloudinary(params);
      if (ok) {
        return data!;
      } else {
        return { error: error! };
      }
    },
  },
};

export default mutation;
