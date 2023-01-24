//@ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import { Document } from "mongoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import path from "path";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { Product, ProductSchema, User, UserSchema } from "../models";
import { uploadFile } from "../helpers";
import { UploadInputValidator } from "../validators";
import {
  UpdateServiceResponse,
  UploadServiceResponse,
} from "../interfaces/uploads";
import { UserInputError } from "apollo-server-express";
import { NotImplementedError } from "../models/errors";

interface UploadImageParams {
  image: GraphQLUpload;
}
interface ImageInCollectionParams {
  id: string;
  collection: "users" | "products";
}
interface UpdateImageParams
  extends ImageInCollectionParams,
    UploadImageParams {}

export const uploadImage = async ({
  image,
}: UploadImageParams): Promise<UploadServiceResponse> => {
  try {
    const fileName = await uploadFile(image, undefined, "imgs");
    const filePath = `uploads/imgs/${fileName}`;
    return {
      data: {
        imagePath: filePath,
      },
      ok: true,
      error: null,
    };
  } catch (error: any) {
    console.log(error);
    return { error: { message: error.message }, ok: false, data: null };
  }
};

export const updateImage = async ({
  id,
  collection,
  image,
}: UpdateImageParams): Promise<UpdateServiceResponse> => {
  try {
    UploadInputValidator.uploadv.validate({ id, collection });

    let document: (Document<any, BeAnObject, any> & User & Product) | null;

    switch (collection) {
      case "users":
        document = await UserSchema.findById(id).populate("role");
        if (!document)
          return {
            error: new UserInputError(`User with id ${id} not exists`),
            ok: false,
            data: null,
          };
        break;

      case "products":
        document = await ProductSchema.findById(id).populate([
          {
            path: "user",
            populate: [{ path: "role" }],
          },
          {
            path: "category",
            populate: [{ path: "user", populate: [{ path: "role" }] }],
          },
        ]);
        if (!document)
          return {
            error: new UserInputError(`Product with id ${id} not exists`),
            ok: false,
            data: null,
          };
        break;

      default:
        return {
          error: new NotImplementedError(
            `Collection ${collection} image upload not implemented yet`
          ),
          ok: false,
          data: null,
        };
    }

    if (document!.image) {
      const imagePath = path.join(
        __dirname,
        "../uploads",
        collection,
        document!.image
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    const nombre = await uploadFile(image, undefined, collection);
    document!.image = `uploads/${collection}/${nombre}`;

    await document!.save();

    return {
      data: document,
      ok: true,
      error: null,
    };
  } catch (error: any) {
    return { error, ok: false, data: null };
  }
};

export const updateImageCloudinary = async ({
  id,
  collection,
  image,
}: UpdateImageParams): Promise<UpdateServiceResponse> => {
  let document: (Document<any, BeAnObject, any> & User & Product) | null;

  try {
    switch (collection) {
      case "users":
        document = await UserSchema.findById(id).populate("role");
        if (!document)
          return {
            error: new UserInputError(`User with id ${id} not exists`),
            ok: false,
            data: null,
          };
        break;

      case "products":
        document = await ProductSchema.findById(id).populate([
          {
            path: "user",
            populate: [{ path: "role" }],
          },
          {
            path: "category",
            populate: [{ path: "user", populate: [{ path: "role" }] }],
          },
        ]);
        if (!document)
          return {
            error: new UserInputError(`Product with id ${id} not exists`),
            ok: false,
            data: null,
          };
        break;

      default:
        return {
          error: new Error(
            `Collection ${collection} image upload not implemented yet`
          ),
          ok: false,
          data: null,
        };
    }

    if (document.image) {
      const nameArray = document.image.split("/");
      const customedUrl = nameArray.slice(-3).join("/");
      const [public_id] = customedUrl.split(".");
      cloudinary.uploader.destroy(public_id);
    }
    const files = await image;

    const uploadPromise = () => {
      return new Promise((resolve) => {
        const uploader = cloudinary.uploader.upload_stream(
          { folder: `productosApp/${collection}` },
          async (err, result) => {
            if (err) {
              throw err;
            }
            if (result) {
              document!.image = result.secure_url;
              await document!.save();
              resolve(document);
            }
          }
        );

        files.createReadStream().pipe(uploader);
      });
    };

    await uploadPromise();

    return {
      data: document,
      ok: true,
      error: null,
    };
  } catch (error: any) {
    return { error, ok: false, data: null };
  }
};
