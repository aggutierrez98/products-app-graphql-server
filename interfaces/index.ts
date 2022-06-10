import { User } from "../models";
export interface ContextInterface {
  user: User | null;
  error: {
    message: string;
  } | null;
}

export interface InputError {
  error: {
    message: string;
  };
}
export interface DatabaseServiceResponse {
  error: { message: string } | null;
  ok: boolean;
  token?: unknown;
}

export * from "./categories";
export * from "./products";
export * from "./search";
export * from "./uploads";
export * from "./users";
