import { DatabaseServiceResponse, InputError } from ".";
import { User } from "../models";

interface GetUsersResult {
  users: User[];
  count: number;
}

export type UserResults = Promise<
  | GetUsersResult
  | {
      user: User | null;
      token?: unknown;
    }
  | User
  | InputError
>;

export interface UserServiceResponse extends DatabaseServiceResponse {
  data: {
    user: User | null;
    token?: unknown;
  };
}
