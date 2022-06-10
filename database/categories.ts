import { CategorySchema, Category } from "../models";
import { ObjectId } from "mongodb";
import { CategoryInputValidator } from "../validators";
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

type CategoryResponse = {
  msg: string;
  ok: boolean;
  data: Category | null;
};

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

export const getCategory = async (id: string): Promise<CategoryResponse> => {
  try {
    await CategoryInputValidator.getv.validateAsync({ id });

    const category = await CategorySchema.findById(id).populate([
      {
        path: "user",
        populate: [{ path: "role" }],
      },
    ]);

    return {
      msg: "",
      data: category,
      ok: true,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
    };
  }
};

export const createCategory = async (
  params: createCategoryParams
): Promise<CategoryResponse> => {
  try {
    const { user, name } = params;

    await CategoryInputValidator.createv.validateAsync(params);

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
      msg: "",
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
    };
  }
};

export const updateCategory = async (
  params: updateCategoryParams
): Promise<CategoryResponse> => {
  try {
    const { id, ...data } = params;

    await CategoryInputValidator.updatev.validateAsync(params);

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
      msg: "",
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
    };
    // if (error.details) {
    //   return {
    //     ok: false,
    //     msg: error.details[0].message,
    //     data: null,
    //   };
    // } else {
    //   console.log(error);
    //   return {
    //     ok: false,
    //     msg: "Ocurrio un error",
    //     data: null,
    //   };
    // }
  }
};

export const deleteCategory = async (id: string): Promise<CategoryResponse> => {
  try {
    await CategoryInputValidator.deletev.validateAsync({ id });

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
      msg: "",
      data: category,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
    };
  }
};
