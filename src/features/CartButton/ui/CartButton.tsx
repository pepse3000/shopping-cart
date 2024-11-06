import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CartButton.module.scss";
import {Button, ButtonThemes, ButtonTypes} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/store/redux";
import {ICartItem} from "entities/Cart/model/types";
import {addToCart} from "entities/Cart/model/cartSlice";
import {FC} from "react";
import {toast} from "react-toastify";

interface CartButtonProps {
    item?: ICartItem;
    className?: string;
}

export const CartButton: FC<CartButtonProps> = (props) => {
    const {
        item,
        className
    } = props;
    const dispatch = useAppDispatch();

    const handleAddCart = () => {
        dispatch(addToCart(item))
        toast.success('Item added to cart!')
    }

    return (
        <Button
            className={classNames(cls.CartButton, {}, [className])}
            onClick={handleAddCart}
            theme={ButtonThemes.BLACK_SQUARE}
            types={ButtonTypes.CART}
        >
            Add To Cart
        </Button>
    )
}