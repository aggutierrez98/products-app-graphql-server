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

interface UpdateResponse {
  data: { imagePath: string } | null;
  ok: boolean;
  msg: string;
}

interface UploadResponse {
  data: Product | User | null;
  ok: boolean;
  msg: string;
}

export const uploadImage = async ({
  image,
}: UploadImageParams): Promise<UpdateResponse> => {
  try {
    const fileName = await uploadFile(image, undefined, "imgs");
    const filePath = `uploads/imgs/${fileName}`;
    return {
      data: {
        imagePath: filePath,
      },
      ok: true,
      msg: "",
    };
  } catch (error: any) {
    console.log(error);
    return { msg: error.message, ok: false, data: null };
  }
};

export const updateImage = async ({
  id,
  collection,
  image,
}: UpdateImageParams): Promise<UploadResponse> => {
  try {
    UploadInputValidator.uploadv.validate({ id, collection });

    let document: (Document<any, BeAnObject, any> & User & Product) | null;

    switch (collection) {
      case "users":
        document = await UserSchema.findById(id);
        if (!document)
          return {
            msg: `User with id ${id} not exists`,
            ok: false,
            data: null,
          };
        break;

      case "products":
        document = await ProductSchema.findById(id);
        if (!document)
          return {
            msg: `Product with id ${id} not exists`,
            ok: false,
            data: null,
          };
        break;

      default:
        return {
          msg: `Collection ${collection} image upload not implemented yet`,
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
      msg: "",
    };
  } catch (error: any) {
    return { msg: error.message, ok: false, data: null };
  }
};

export const updateImageCloudinary = async ({
  id,
  collection,
  image,
}: UpdateImageParams): Promise<UploadResponse> => {
  let document: (Document<any, BeAnObject, any> & User & Product) | null;

  try {
    switch (collection) {
      case "users":
        document = await UserSchema.findById(id).populate("role");
        if (!document)
          return {
            msg: `User with id ${id} not exists`,
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
            msg: `Product with id ${id} not exists`,
            ok: false,
            data: null,
          };
        break;

      default:
        return {
          msg: `Collection ${collection} image upload not implemented yet`,
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

    const uploader = cloudinary.uploader.upload_stream(
      { folder: `productosApp/${collection}` },
      async (err, result) => {
        if (err) throw err;
        if (result) {
          document!.image = result.secure_url;
          await document!.save();
        }
      }
    );

    await files.createReadStream().pipe(uploader);

    return {
      data: document,
      ok: true,
      msg: "",
    };
  } catch (error: any) {
    return { msg: error.message, ok: false, data: null };
  }
};
