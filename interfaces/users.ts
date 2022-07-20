import { DatabaseServiceResponse, InputError } from ".";
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
