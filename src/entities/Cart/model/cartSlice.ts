import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "entities/Cart/model/types";

const initialState: ICartItem[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const findItemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (findItemIndex === -1) {
                state.push(action.payload);
                return state;
            }

            state[findItemIndex].quantity += action.payload.quantity;
            return state;
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;