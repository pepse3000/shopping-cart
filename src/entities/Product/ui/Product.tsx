import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Product.module.scss";
import {FC} from "react";
import {IItem} from "../model/types/itemInterface";
import {Discount} from "shared/ui/Discount/Discount";
import {Rating} from "shared/ui/Rating/Rating";
import {CartButton} from "features/CartButton";
import {WishButton} from "features/WishButton";
import {IWishItem} from "entities/WishList/model/types";

interface ProductProps {
    item: IItem | IWishItem;
    className?: string;
    discount?: number;
}

export const Product: FC<ProductProps> = (props) => {
    const {
        item,
        className,
        discount
    } = props;

    const regex = /https?:\/\/[^\s"']+\.jpeg/
    const imgUrl = item.images[0].match(regex);

    return (
        <div className={classNames(cls.Product, {}, [className])}>
            <div className={cls.productItem}>
                <div className={cls.imgHolder}>
                    {imgUrl && <img src={imgUrl && imgUrl[0]} alt="product image"/>}
                    {!imgUrl && <div className={cls.noImg}>No image</div>}
                </div>
                {discount && <Discount discount={discount}/>}
                <WishButton
                    item={{
                        id: item.id,
                        images: item.images,
                        title: item.title,
                        price: item.price
                    }}
                    className={cls.wishBtn}
                />
                <CartButton
                    item={{
                        id: item.id,
                        price: item.price,
                        images: item.images,
                        title: item.title,
                        quantity: 1,
                    }}
                    className={cls.cartBtn}
                />
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