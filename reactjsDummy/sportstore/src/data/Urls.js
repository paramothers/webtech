import {DataType} from "./Types";

// const protocol = "http";
// const hostname = "localhost";
// const port = 3500;

export const  RestUrls = {
    [DataType.PRODUCTS] : `/api/products`,
    [DataType.CATEGORIES]:`/api/categories`,
    [DataType.ORDERS]: `/api/orders`
}

export const GraphQlUrl = `/graphql`;
export const authUrl = `/login`;