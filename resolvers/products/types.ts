//@ts-ignore
import { IResolvers } from "@graphql-tools/utils";

const resolvers: IResolvers = {
    GetProductsResponse: {
        __resolveType: (data: any) => {
            let type: string;

            if (data.products) type = "GetProductsResults";
            else type = "InputError";

            return type;
        },
    },
    ProductResponse: {
        __resolveType: (data: any) => {
            let type: string;

            if (data.name) type = "Product";
            else type = "InputError";

            return type;
        },
    },
};

export default resolvers;
