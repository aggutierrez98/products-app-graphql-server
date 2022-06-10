import { Request } from "express";
import { NOT_AUTH_QUERIES } from "../constants";
import { ContextInterface } from "../interfaces";
import { validateJWT } from "./validate-jwt";
import { validateRole } from "./validate-roles";

export interface Context {
  req: Request;
}

export const contextMiddleware = async ({
  req,
}: Context): Promise<ContextInterface> => {
  const query = req.body.query;

  const isAuthQuery = NOT_AUTH_QUERIES.some((route) => query.includes(route));

  try {
    if (!isAuthQuery) {
      const { error, data } = await validateJWT(req);
      if (error) {
        return { user: data, error: { message: error } };
      }

      if (data) {
        const [isValidRole, message] = await validateRole(data, query);

        if (isValidRole) {
          return {
            user: data,
            error: null,
          };
        }
        return {
          user: null,
          error: message ? { message } : null,
        };
      }

      return { user: data, error: null };
    } else {
      return { user: null, error: null };
    }
  } catch (err) {
    console.log({ err });
    return { user: null, error: { message: "An unexpected error ocurred" } };
  }
};
