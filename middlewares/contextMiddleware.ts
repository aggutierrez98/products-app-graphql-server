import { Request } from "express";
import { NOT_AUTH_QUERIES } from "../constants";
import { ContextInterface } from "../interfaces";
import { validateJWT } from "./validate-jwt";
import { validateRole } from "./validate-roles";
import { Role } from "../models/role";

export interface Context {
  req: Request;
}

export const contextMiddleware = async ({
  req,
}: Context): Promise<ContextInterface> => {
  const operationName = req.body.operationName;

  const isProtectedQuery = !NOT_AUTH_QUERIES.some(
    (query) => query.toLowerCase() === operationName.toLowerCase()
  );

  try {
    if (isProtectedQuery) {
      const { error, data } = await validateJWT(req);

      if (error) return { user: data, error };
      else if (data) {
        const [isValidRole, error] = await validateRole(
          data.role as Role,
          operationName
        );

        if (isValidRole) {
          return {
            user: data,
            error: null,
          };
        } else
          return {
            user: null,
            error,
          };
      }

      return { user: data, error: null };
    } else {
      return { user: null, error: null };
    }
  } catch (err) {
    return { user: null, error: new Error("An unexpected error ocurred") };
  }
};
