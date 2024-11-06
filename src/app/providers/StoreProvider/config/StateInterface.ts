import {ICartItem} from "entities/Cart/model/types";
import {productAPI} from "entities/Product/model/slices/productService";
import {IWishItem} from "entities/WishList/model/types";

export interface StateInterface {
    [productAPI.reducerPath]: ReturnType<typeof productAPI.reducer>,
    cart: ICartItem[],
    wishes: IWishItem[],
}