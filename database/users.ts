import bcryptjs from "bcryptjs";
import { UserSchema, User } from "../models";
import { generateJWT } from "../helpers";
import { UserInputValidator } from "../validators";

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

type UserResponse = {
  msg: string;
  ok: boolean;
  data: User | null;
  token: unknown;
};

export const getUsers = async ({
  limit = 5,
  skip = 0,
}: GetUsersParams): Promise<[number, User[]]> => {
  const query = { active: true };

  const [total, users] = await Promise.all([
    UserSchema.countDocuments(query).limit(limit).skip(skip),
    UserSchema.find(query).limit(limit).skip(skip).populate("role"),
  ]);

  return [total, users];
};

export const createUser = async (
  params: CreateUserParams
): Promise<UserResponse> => {
  try {
    const { name, email, password, role } = params;

    await UserInputValidator.createv.validateAsync(params);

    const emailToSave = email.toUpperCase();

    const user = new UserSchema({ name, email: emailToSave, password, role });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Guardar en BD
    await user.save();

    await user.populate("role");

    const token = await generateJWT(user.id);
    return {
      ok: true,
      msg: "",
      data: user,
      token,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
      token: null,
    };
  }
};

export const updateUser = async (
  params: UpdateUserParams
): Promise<UserResponse> => {
  try {
    const { id, password, role, google, email, ...rest } = params;

    await UserInputValidator.updatev.validateAsync(params);

    const updateData = {
      ...rest,
      password,
    };

    if (password) {
      // Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      updateData.password = bcryptjs.hashSync(password, salt);
    }

    const user = await UserSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    }).populate("role");

    return {
      ok: true,
      msg: "",
      data: user,
      token: null,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
      token: null,
    };
  }
};

export const deleteUser = async (id: string): Promise<UserResponse> => {
  try {
    await UserInputValidator.deletev.validateAsync({ id });

    const user = await UserSchema.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    ).populate("role");

    return {
      ok: true,
      msg: "",
      data: user,
      token: null,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error.message,
      data: null,
      token: null,
    };
  }
};
