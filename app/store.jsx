import { configureStore } from '@reduxjs/toolkit'
import { ProductControl } from './features/api/ProductControl';

const store = configureStore({
    reducer: {
        [ProductControl.reducerPath]: ProductControl.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductControl.middleware)

})
export default store;