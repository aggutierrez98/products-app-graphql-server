//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
    GetProductsResponse: {
        __resolveType: (data: any) => {
            let type: string;

            if (data.error) type = "InputError";
            else type = "GetProductsResults";

            return type;
        },
    },
    ProductResponse: {
        __resolveType: (data: any) => {
            let type: string;

            if (data.error) type = "InputError";
            else type = "Product";

            return type;
        },
    },
};

export default resolvers;
