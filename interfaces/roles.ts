import {
  BeAnObject,
  IObjectWithTypegooseFunction,
} from "@typegoose/typegoose/lib/types";
import { Document } from "mongoose";
import { DatabaseServiceResponse } from ".";
import { Category } from "../models/category";
import { Role } from "../models/role";

export interface GetRolesResults {
  roles: Role[];
  count: number;
}

export interface RoleServiceResponse extends DatabaseServiceResponse {
  data: Category | null;
}

export type RoleFromDB =
  | (Document<any, BeAnObject, any> &
      Role &
      IObjectWithTypegooseFunction & {
        _id: any;
      })
  | null;
