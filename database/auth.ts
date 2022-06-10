import { User, UserSchema } from "../models";
import { generateJWT } from "../helpers";
import { googleVerify } from "../helpers/google-verify";
import { AuthInputValidator } from "../validators";

type UserResponse = {
  msg: string;
  ok: boolean;
  data: User | null;
  token: unknown;
};

interface LoginParams {
  email: string;
  password: string;
}

export const login = async (params: LoginParams): Promise<UserResponse> => {
  try {
    const { email, password } = params;

    AuthInputValidator.loginv.valid(params);

    const user = await AuthInputValidator.credentials(email, password);
    const token = await generateJWT(user.id);

    return {
      msg: "",
      ok: true,
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

export const googleSignIn = async (id_token: string): Promise<UserResponse> => {
  try {
    const { email, name, image } = await googleVerify(id_token);

    let user = await UserSchema.findOne({ email }).populate("role");

    if (!user) {
      const data = {
        name,
        email,
        password: "-",
        image,
        google: true,
      };

      user = new UserSchema(data);
      await user.save();
    }

    if (!user.active) {
      return {
        msg: "Server error: User blocked",
        ok: false,
        data: null,
        token: null,
      };
    }

    const token = await generateJWT(user.id);

    return {
      msg: "",
      ok: true,
      data: user,
      token,
    };
  } catch (e) {
    return {
      msg: "Google token not valid",
      ok: false,
      data: null,
      token: null,
    };
  }
};
