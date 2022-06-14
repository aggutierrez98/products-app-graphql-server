// import { IResolvers } from "@graphql-tools/utils";
// import { renewToken } from "../../database/auth";
// import { getCategories, getCategory } from "../../database/categories";
// import { ContextInterface, CategoryResults } from "../../interfaces";

// const query: IResolvers<any, ContextInterface> = {
//   Query: {
//     async renewToken(
//       _: void,
//       { error: contextError }
//     ): CategoryResults {
//       if (contextError) return { error: contextError };

//       const [count, categories] = await renewToken(token);
//       return { categories, count };
//     },
   
//   },
// };

// export default query;
