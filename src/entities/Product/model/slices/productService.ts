import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IItem} from "entities/Product/model/types/itemInterface";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1'}),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<IItem[], number>({
            query: (limit: number = 10) => ({
                url: '/products',
                params: {
                    offset: 0,
                    limit: limit
                }
            }),
        }),
    })
})