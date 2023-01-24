import { AuthenticationError } from "apollo-server-express";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { UserFromDB } from "../interfaces";
import { User, UserSchema } from "../models";

export interface Context {
  req: Request;
}

interface Response {
  error: any;
  data: UserFromDB | null;
}

export const validateJWT = async (req: Request): Promise<Response> => {
  try {
    const token = req.headers["x-token"];

    if (!token)
      return {
        error: new AuthenticationError("Must be authenticated"),
        data: null,
      };

    //@ts-ignore
    const uid = jwt.verify(token, process.env.SECRETORPRIVATEKEY!).uid;

    const user = await UserSchema.findById(uid).populate("role");

    if (!user)
      return {
        error: new AuthenticationError("Invalid token: expired or malformed"),
        data: null,
      };

    if (!user?.active)
      return {
        error: new AuthenticationError("Invalid token: user not active"),
        data: null,
      };

    return { data: user, error: null };
  } catch (err: any) {
    return {
      error: new Error("Unexpected error"),
      data: null,
    };
  }
};
