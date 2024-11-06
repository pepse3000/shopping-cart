import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IWishItem} from "./types";

const initialState: IWishItem[] = [];

const wishSlice = createSlice({
    name: 'wishes',
    initialState,
    reducers: {
        addWishItem: (state, action: PayloadAction<IWishItem>) => {
            const findItemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            )

            if (findItemIndex === -1) {
                state.push(action.payload);
                return state;
            }

            return state;
        },
        removeWishItem: (state, action: PayloadAction<IWishItem>) => {
            state = state.filter((item) => item.id !== action.payload.id);
            return state;
        }
    }
})

export const {addWishItem, removeWishItem} = wishSlice.actions;
export default wishSlice.reducer;