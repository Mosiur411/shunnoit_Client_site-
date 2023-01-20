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
        }




        
    },
})
export const { productAdd } = ProductSlice.actions
export default ProductSlice.reducer