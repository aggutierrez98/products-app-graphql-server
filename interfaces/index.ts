import { UserFromDB } from "./users";
export interface ContextInterface {
  user: UserFromDB | null;
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
