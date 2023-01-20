import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const URL = 'http://localhost:3000/';
// const URL = 'https://e-commerce-rangpur.vercel.app/';
export const ProductControl = createApi({
    reducerPath: "Product",
    baseQuery: fetchBaseQuery({
        baseUrl: URL
    }),
    tagTypes: ['ProductData', "ProductID", "Brand", "Categories", "Admin"],
    endpoints: (builder) => ({
 


    })
})
export const {} = ProductControl;