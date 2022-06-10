import { ProductSchema, Product } from "../models";
import { ObjectId } from "mongodb";
import { ProductInputValidator } from "../validators";
import { ProductServiceResponse } from "../interfaces/products";

interface GetProductsParams {
  limit: number;
  skip: number;
}

interface CreateProductParams {
  name: string;
  description?: string;
  price: number;
  user: string;
  category: string;
}

interface UpdateProductParams {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  user?: string;
  category?: string;
}

export const getProducts = async ({
  limit = 5,
  skip = 0,
}: GetProductsParams): Promise<[number, Product[]]> => {
  const query = { active: true };

  const [total, products] = await Promise.all([
    ProductSchema.countDocuments(query).limit(limit).skip(skip),
    ProductSchema.find(query)
      .populate([
        {
          path: "user",
          populate: [{ path: "role" }],
        },
        {
          path: "category",
          populate: [{ path: "user", populate: [{ path: "role" }] }],
        },
      ])
      .skip(skip)
      .limit(limit),
  ]);

  return [total, products];
};

export const getProduct = async (id: string): Promise<ProductServiceResponse> => {
  try {
    await ProductInputValidator.getv.validateAsync({ id });

    const product = await ProductSchema.findById(id).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
      {
        path: "category",
        populate: [{ path: "user", populate: [{ path: "role" }] }],
      },
    ]);

    return {
      error: null,
      data: product,
      ok: true,
    };
  } catch (error: any) {
    return {
      ok: false,
      error: { message: error.message },
      data: null,
    };
  }
};

export const createProduct = async (
  params: CreateProductParams
): Promise<ProductServiceResponse> => {
  try {
    await ProductInputValidator.createv.validateAsync(params);

    const dataToDB = {
      ...params,
      name: params.name.toUpperCase(),
      // @ts-ignore:
      category: ObjectId(params.category),
      // @ts-ignore:
      user: ObjectId(params.user),
      // user: req.user._id,
    };

    const product = new ProductSchema(dataToDB);
    await product.save();
    await product.populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
      {
        path: "category",
        populate: [{ path: "user", populate: [{ path: "role" }] }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: product,
    };
  } catch (error: any) {
    return {
      ok: false,
      error: { message: error.message },
      data: null,
    };
  }
};

export const updateProduct = async (
  params: UpdateProductParams
): Promise<ProductServiceResponse> => {
  try {
    const { id, ...data } = params;

    await ProductInputValidator.updatev.validateAsync(params);

    if (data.name) data.name = data.name.toUpperCase();
    // @ts-ignore:
    if (data.user) data.user = ObjectId(data.user);
    // @ts-ignore:
    if (data.category) data.category = ObjectId(data.category);

    const product = await ProductSchema.findByIdAndUpdate(id, data, {
      new: true,
    }).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
      {
        path: "category",
        populate: [{ path: "user", populate: [{ path: "role" }] }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: product,
    };
  } catch (error: any) {
    return {
      ok: false,
      error: { message: error.message },
      data: null,
    };
  }
};

export const deleteProduct = async (id: string): Promise<ProductServiceResponse> => {
  try {
    await ProductInputValidator.deletev.validateAsync({ id });

    const product = await ProductSchema.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    ).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
      {
        path: "category",
        populate: [{ path: "user", populate: [{ path: "role" }] }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: product,
    };
  } catch (error: any) {
    return {
      ok: false,
      error: { message: error.message },
      data: null,
    };
  }
};
