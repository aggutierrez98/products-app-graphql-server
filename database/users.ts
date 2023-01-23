import bcryptjs from "bcryptjs";
import { UserSchema, User, RoleSchema } from "../models";
import { generateJWT } from "../helpers";
import { UserInputValidator } from "../validators";
import { UserServiceResponse } from "../interfaces/users";
import { UserInputError } from "apollo-server-express";
import { isValidObjectId } from "mongoose";

interface GetUsersParams {
  limit: number;
  skip: number;
}

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface UpdateUserParams {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  google?: boolean;
  role?: string;
}

export const getUsers = async ({
  limit = 5,
  skip = 0,
}: GetUsersParams): Promise<[number, User[]]> => {
  // // const query = { active: true };
  const query = {};

  const [total, users] = await Promise.all([
    UserSchema.countDocuments(query).limit(limit).skip(skip),
    UserSchema.find(query).limit(limit).skip(skip).populate("role"),
  ]);

  return [total, users];
};

export const getUser = async (id: string): Promise<UserServiceResponse> => {
  try {
    try {
      await UserInputValidator.getv.validateAsync({ id });
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const user = await UserSchema.findById(id).populate("role");

    return {
      error: null,
      data: { user },
      ok: true,
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: { user: null },
    };
  }
};

export const createUser = async (
  params: CreateUserParams
): Promise<UserServiceResponse> => {
  try {
    let { name, email, password, role } = params;

    try {
      await UserInputValidator.createv.validateAsync(params);
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const emailToSave = email.toUpperCase();

    if (!isValidObjectId(role))
      role = (await RoleSchema.findOne({ name: role }))!._id;

    const user = new UserSchema({
      name,
      email: emailToSave,
      password,
      role,
    });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await user.save();

    await user.populate("role");

    const token = await generateJWT(user.id);
    return {
      ok: true,
      error: null,
      data: { user, token },
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: { user: null, token: null },
    };
  }
};

export const updateUser = async (
  params: UpdateUserParams
): Promise<UserServiceResponse> => {
  try {
    const { id, password, google, email, ...rest } = params;

    try {
      await UserInputValidator.updatev.validateAsync(params);
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const updateData = {
      ...rest,
    };

    if (password) {
      // Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      (updateData as any).password = bcryptjs.hashSync(password, salt);
    }

    const user = await UserSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("role");

    return {
      ok: true,
      error: null,
      data: { user, token: null },
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: { user: null, token: null },
    };
  }
};

export const deleteUser = async (id: string): Promise<UserServiceResponse> => {
  try {
    try {
      await UserInputValidator.deletev.validateAsync({ id });
    } catch (error: any) {
      throw new UserInputError(error.message);
    }
    const user = await UserSchema.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    ).populate("role");

    return {
      ok: true,
      error: null,
      data: { user, token: null },
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: { user: null, token: null },
    };
  }
};

export const activateUser = async (
  id: string
): Promise<UserServiceResponse> => {
  try {
    try {
      await UserInputValidator.deletev.validateAsync({ id });
    } catch (error: any) {
      throw new UserInputError(error.message);
    }

    const user = await UserSchema.findByIdAndUpdate(
      id,
      { active: true },
      { new: true }
    ).populate("role");

    return {
      ok: true,
      error: null,
      data: { user, token: null },
    };
  } catch (error: any) {
    return {
      ok: false,
      error,
      data: { user: null, token: null },
    };
  }
};
