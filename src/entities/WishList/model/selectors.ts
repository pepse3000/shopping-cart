import {StateInterface} from "app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

const selectWishes = (state: StateInterface) => state.wishes;