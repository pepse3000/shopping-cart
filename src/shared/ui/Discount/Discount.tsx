import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Discount.module.scss";
import {FC} from "react";

interface DiscountProps {
    discount?: number;
    className?: string;
}

export const Discount: FC<DiscountProps> = (props) => {
    const {
        discount,
        className
    } = props;

    return (
        <div className={classNames(cls.Discount, {}, [className])}>
            -{discount}%
        </div>
    )
}