import { User } from "../models";

export interface ContextInterface {
  user: User | null;
  error: {
    message: string;
  } | null;
}

export interface InputError {
  message: string;
}
