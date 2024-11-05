import {StateInterface} from "app/providers/StoreProvider/config/StateInterface";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productAPI} from "entities/Product/model/slices/productService";

const rootReducer = combineReducers({
    [productAPI.reducerPath]: productAPI.reducer
})

export function createReduxStore(initialState: StateInterface) {
    return configureStore({
        reducer: rootReducer,
        devTools: false,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productAPI.middleware),
        preloadedState: initialState,
    })
}
