import {StateInterface} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

const selectCartItems = (state: StateInterface) => state.cart;

export const selectCartItemCount = createSelector([selectCartItems],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
);