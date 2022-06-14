import { UserSchema } from "../models";
import { generateJWT } from "../helpers";
import { googleVerify } from "../helpers/google-verify";
import { AuthInputValidator } from "../validators";
import { UserServiceResponse } from "../interfaces/users";

interface LoginParams {
  email: string;
  password: string;
}

export const login = async (
  params: LoginParams
): Promise<UserServiceResponse> => {
  try {
    const { email, password } = params;

    AuthInputValidator.loginv.valid(params);

    const user = await AuthInputValidator.credentials(email, password);
    const token = await generateJWT(user.id);

    return {
      error: null,
      ok: true,
      data: { user, token },
    };
  } catch (error: any) {
    return {
      ok: false,
      error: { message: error.message },
      data: { user: null, token: null },
    };
  }
};

// export const renewToken = async (
//   token: string
// ): Promise<UserServiceResponse> => {
//   try {
//     // const user = await AuthInputValidator.credentials(email, password);
//     // const token = await generateJWT(user.id);

//     return {
//       error: null,
//       ok: true,
//       data: { user, token },
//     };
//   } catch (error: any) {
//     return {
//       ok: false,
//       error: { message: error.message },
//       data: { user: null, token: null },
//     };
//   }
// };

export const googleSignIn = async (
  id_token: string
): Promise<UserServiceResponse> => {
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
        error: { message: "Server error: User blocked" },
        ok: false,
        data: { user: null, token: null },
      };
    }

    const token = await generateJWT(user.id);

    return {
      error: null,
      ok: true,
      data: { user, token },
      token,
    };
  } catch (e) {
    return {
      error: { message: "Google token not valid" },
      ok: false,
      data: { user: null, token: null },
    };
  }
};
