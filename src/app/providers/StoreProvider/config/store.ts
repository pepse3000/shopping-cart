import {StateInterface} from "app/providers/StoreProvider/config/StateInterface";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productAPI} from "entities/Product/model/slices/productService";
import cartReducer from 'entities/Cart/model/cartSlice';
import wishSlice from "entities/WishList/model/wishSlice";

const rootReducer = combineReducers({
    [productAPI.reducerPath]: productAPI.reducer,
    cart: cartReducer,
    wishes: wishSlice,
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

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']