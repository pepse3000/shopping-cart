import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Product.module.scss";
import {FC} from "react";
import {Button, ButtonThemes, ButtonTypes} from "shared/ui/Button/Button";
import {IItem} from "../model/types/itemInterface";
import {Discount} from "shared/ui/Discount/Discount";
import {Rating} from "shared/ui/Rating/Rating";

interface ProductProps {
    item: IItem;
    addToCart: () => void;
    addToWishlist: () => void;
    className?: string;
    discount?: number;
}

export const Product: FC<ProductProps> = (props) => {
    const {
        item,
        addToCart,
        addToWishlist,
        className,
        discount
    } = props;

    const regex = /https?:\/\/[^\s"']+\.jpeg/
    const imgUrl = item.images[0].match(regex);

    return (
        <div className={classNames(cls.Product, {}, [className])}>
            <div
                className={cls.productItem}
                style={{
                    background: `url(${item.images[0]})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
            }}
            >
                {discount && <Discount discount={discount}/>}
                <Button
                    className={cls.wishBtn}
                    onClick={addToWishlist}
                    theme={ButtonThemes.ROUND}
                    types={ButtonTypes.WISHLIST}
                />
                <Button
                    className={cls.cartBtn}
                    onClick={addToCart}
                    theme={ButtonThemes.BLACK_SQUARE}
                    types={ButtonTypes.CART}
                >
                    Add To Cart
                </Button>
            </div>

            <div className={cls.productDesc}>
                <p className={cls.title}>{item.title}</p>
                <span
                    className={discount ? cls.red : cls.price}
                >
                    ${Number(discount ? item.price - (item.price * discount / 100) : item.price).toFixed(2)}
                </span>
                {discount && <span className={cls.crossed}>${item.price}</span>}
                <Rating />
            </div>
        </div>
    )
}