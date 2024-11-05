import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IItem} from "entities/Product/model/types/itemInterface";

export enum ProductCategories {
    CLOTHES = '1143',
    ELECTRONICS = '1145',
    FURNITURE = '1146',
    SHOES = '1144',
    MISC = '1147'
}

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1'}),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IItem[], { limit: number, offset: number }>({
            query: ({limit = 10, offset = 0}) => ({
                url: '/products',
                params: {
                    offset: offset,
                    limit: limit
                }
            }),
        }),
        fetchByCategory: builder.query<IItem[], ProductCategories>({
            query: (category: ProductCategories = ProductCategories.CLOTHES) => ({
                url: '/products',
                params: {
                    categoryId: category
                }
            }),
        })
    })
})