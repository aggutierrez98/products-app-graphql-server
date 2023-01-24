import {
  BeAnObject,
  IObjectWithTypegooseFunction,
} from "@typegoose/typegoose/lib/types";
import { Document } from "mongoose";
import { DatabaseServiceResponse } from ".";
import { User } from "../models";

export interface GetUsersResult {
  users: User[];
  count: number;
}

export type AuthResults = Promise<{
  user: User | null;
  token?: unknown;
}>;

export interface UserServiceResponse extends DatabaseServiceResponse {
  data: {
    user: User | null;
    token?: unknown;
  };
}

export type UserFromDB =
  | (Document<any, BeAnObject, any> &
      User &
      IObjectWithTypegooseFunction & {
        _id: any;
      })
  | null;
