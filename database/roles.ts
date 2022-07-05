import { RoleSchema, Role } from "../models";
// import { ObjectId } from "mongodb";
// import { CategoryInputValidator } from "../validators";
// import { CategoryServiceResponse } from "../interfaces/categories";

// interface getRolesParams {
//   limit: number;
//   skip: number;
// }

// interface createCategoryParams {
//   name: string;
//   user: string;
// }

// interface updateCategoryParams {
//   id: number;
//   name?: string;
//   user?: string;
// }

export const getRoles = async (): Promise<[number, Role[]]> => {
  const query = { active: true };

  const [total, roles] = await Promise.all([
    RoleSchema.countDocuments(query),
    RoleSchema.find(query),
    //   .skip(skip)
    //   .limit(limit),
  ]);
  return [total, roles];
};

// export const getCategory = async (
//   id: string
// ): Promise<CategoryServiceResponse> => {
//   try {
//     await CategoryInputValidator.getv.validateAsync({ id });

//     const category = await CategorySchema.findById(id).populate([
//       {
//         path: "user",
//         populate: [{ path: "role" }],
//       },
//     ]);

//     return {
//       error: null,
//       data: category,
//       ok: true,
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       error: { message: error.message },
//       data: null,
//     };
//   }
// };

// export const createCategory = async (
//   params: createCategoryParams
// ): Promise<CategoryServiceResponse> => {
//   try {
//     const { user, name } = params;

//     await CategoryInputValidator.createv.validateAsync(params);

//     const data = {
//       name: name.toUpperCase(),
//       // @ts-ignore:
//       user: ObjectId(user),
//     };

//     const category = new CategorySchema(data);
//     await category.save();
//     await category.populate([
//       {
//         path: "user",
//         populate: [{ path: "role" }],
//       },
//     ]);

//     return {
//       ok: true,
//       error: null,
//       data: category,
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       error: { message: error.message },
//       data: null,
//     };
//   }
// };

// export const updateCategory = async (
//   params: updateCategoryParams
// ): Promise<CategoryServiceResponse> => {
//   try {
//     const { id, ...data } = params;

//     await CategoryInputValidator.updatev.validateAsync(params);

//     if (data.name) data.name = data.name.toUpperCase();
//     if (data.user) {
//       // @ts-ignore:
//       data.user = ObjectId(data.user);
//     }

//     const category = await CategorySchema.findByIdAndUpdate(id, data, {
//       new: true,
//     }).populate([
//       {
//         path: "user",
//         populate: [{ path: "role" }],
//       },
//     ]);

//     return {
//       ok: true,
//       error: null,
//       data: category,
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       error: { message: error.message },
//       data: null,
//     };
//   }
// };

// export const deleteCategory = async (id: string): Promise<CategoryServiceResponse> => {
//   try {
//     await CategoryInputValidator.deletev.validateAsync({ id });

//     const category = await CategorySchema.findByIdAndUpdate(
//       id,
//       { active: false },
//       { new: true }
//     ).populate([
//       {
//         path: "user",
//         populate: [{ path: "role" }],
//       },
//     ]);

//     return {
//       ok: true,
//       error: null,
//       data: category,
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       error: { message: error.message },
//       data: null,
//     };
//   }
// };
