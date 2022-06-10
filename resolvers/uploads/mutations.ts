import { IResolvers } from "@graphql-tools/utils";
import {
  updateImage,
  uploadImage,
  updateImageCloudinary,
} from "../../database/uploads";
import { ContextInterface, InputError } from "../../interfaces";
import { Product, User } from "../../models";

interface UpdateResponse {
  imagePath: string;
}
type UploadImageResponse = Promise<UpdateResponse | InputError>;
type UpdateImageResponse = Promise<User | Product | InputError>;

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async uploadImage(__: void, { image }, { error }): UploadImageResponse {
      if (error) return error;
      const { ok, msg, data } = await uploadImage(image);
      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async updateImage(__: void, params, { error }): UpdateImageResponse {
      if (error) return error;
      const { ok, msg, data } = await updateImage(params);
      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async updateImageCloudinary(
      __: void,
      params,
      { error }
    ): UpdateImageResponse {
      if (error) return error;
      const { ok, msg, data } = await updateImageCloudinary(params);
      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default mutation;
