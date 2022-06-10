import { IResolvers } from "@graphql-tools/utils";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../database/categories";
import { ContextInterface, InputError } from "../../interfaces";
import { Category, RoleSchema } from "../../models";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createCategory(
      _: void,
      { category },
      { error }
    ): Promise<Category | InputError> {
      if (error) return error;

      const { ok, msg, data } = await createCategory(category);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async updateCategory(
      __: void,
      { category },
      { error, user }
    ): Promise<Category | InputError> {
      if (error) return error;

      const isAdminRole =
        (await RoleSchema.findById(user?.role))?.name === "ADMIN_ROLE";

      if (!isAdminRole) return { message: "Debe ser administrador" };

      const { ok, msg, data } = await updateCategory(category);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
    async deleteCategory(
      __: void,
      { id },
      { error }
    ): Promise<Category | InputError> {
      if (error) return error;

      const { ok, msg, data } = await deleteCategory(id);

      if (ok) {
        return data!;
      } else {
        return { message: msg };
      }
    },
  },
};

export default mutation;
