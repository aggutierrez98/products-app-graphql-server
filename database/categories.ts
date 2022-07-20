import { CategorySchema, Category } from "../models";
import { ObjectId } from "mongodb";
import { CategoryInputValidator } from "../validators";
import { CategoryServiceResponse } from "../interfaces/categories";
import { UserInputError } from "apollo-server-express";
interface getCategoriesParams {
  limit: number;
  skip: number;
}

interface createCategoryParams {
  name: string;
  user: string;
}

interface updateCategoryParams {
  id: number;
  name?: string;
  user?: string;
}
export const getCategories = async ({
  limit = 5,
  skip = 0,
}: getCategoriesParams): Promise<[number, Category[]]> => {
  const query = { active: true };

  const [total, categories] = await Promise.all([
    CategorySchema.countDocuments(query).limit(limit).skip(skip),
    CategorySchema.find(query)
      .populate([
        {
          path: "user",
          populate: [{ path: "role" }],
        },
      ])
      .skip(skip)
      .limit(limit),
  ]);
  return [total, categories];
};

export const getCategory = async (
  id: string
): Promise<CategoryServiceResponse> => {
  try {
    await CategoryInputValidator.getv.validateAsync({ id });

    const category = await CategorySchema.findById(id).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return {
      error: null,
      data: category,
      ok: true,
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: null,
    };
  }
};

export const createCategory = async (
  params: createCategoryParams
): Promise<CategoryServiceResponse> => {
  try {
    const { user, name } = params;

    try {
      await CategoryInputValidator.createv.validateAsync(params);
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const data = {
      name: name.toUpperCase(),
      // @ts-ignore:
      user: ObjectId(user),
    };

    const category = new CategorySchema(data);
    await category.save();
    await category.populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: null,
    };
  }
};

export const updateCategory = async (
  params: updateCategoryParams
): Promise<CategoryServiceResponse> => {
  try {
    const { id, ...data } = params;

    try {
      await CategoryInputValidator.updatev.validateAsync(params);
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    if (data.name) data.name = data.name.toUpperCase();
    if (data.user) {
      // @ts-ignore:
      data.user = ObjectId(data.user);
    }

    const category = await CategorySchema.findByIdAndUpdate(id, data, {
      new: true,
    }).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: null,
    };
  }
};

export const deleteCategory = async (
  id: string
): Promise<CategoryServiceResponse> => {
  try {
    try {
      await CategoryInputValidator.deletev.validateAsync({ id });
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const category = await CategorySchema.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    ).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return {
      ok: true,
      error: null,
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: null,
    };
  }
};
