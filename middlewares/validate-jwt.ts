import { Request } from "express";
import jwt from "jsonwebtoken";
import { User, UserSchema } from "../models";

export interface Context {
  req: Request;
}

interface Response {
  error: string | null;
  data: User | null;
}

export const validateJWT = async (req: Request): Promise<Response> => {
  try {
    const token = req.headers["x-token"];

    console.log("TOKEN: -", token);

    if (!token)
      return {
        error: "Must be authenticated",
        data: null,
      };

    //@ts-ignore
    const uid = jwt.verify(token, process.env.SECRETORPRIVATEKEY!).uid;

    const user = await UserSchema.findById(uid);

    if (!user)
      return {
        error: "You must be logged in",
        data: null,
      };

    if (!user?.active)
      return {
        error: "Invalid token: user not active",
        data: null,
      };

    return { data: user, error: null };
  } catch (err: any) {
    console.log(err);
    return {
      error: "Invalid token: expired or malformed",
      data: null,
    };
  }
};
