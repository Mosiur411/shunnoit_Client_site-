import { useSelector } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    product: [],
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productAdd: (state, action) => {
            if (action?.payload.length >= 0) {
                return {
                    ...state,
                    product: action.payload,
                }
            }
            if (action?.payload?.title) {
                console.log(action?.payload)
                return {
                    ...state,
                    product: [...state.product, action.payload],
                }
            }
        },
        productDelete: (state, action) => {

            var arr = JSON.parse(localStorage.getItem("data"))
            if (arr) {
                const data = arr.filter((dt, index) => index !== action.payload)
                localStorage.setItem("data", JSON.stringify(data));
            }
            if (action?.payload >= 0) {
                return {
                    product: state.product.filter((dt, index) => index !== action.payload),
                }
            }
        }


    },
})
export const { productAdd, productDelete } = ProductSlice.actions
export default ProductSlice.reducer