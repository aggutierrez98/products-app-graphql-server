import { ApolloError } from "apollo-server-express";

export class NotImplementedError extends ApolloError {
  constructor(message: string) {
    super(message, "NOT_IMPLEMENTED");

    Object.defineProperty(this, "name", { value: "NotImplementedError" });
  }
}

// export class NotAuthError extends ApolloError {
//   constructor(message: string) {
//     super(message, "NOT_AUTH");

//     Object.defineProperty(this, "name", { value: "NotAuthError" });
//   }
// }
