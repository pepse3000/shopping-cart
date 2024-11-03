import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

export enum ButtonTypes {
    WISHLIST = 'wishlist',
    CART = 'cart',
    REMOVE = 'remove',
    NAVIGATION = 'navigation',
    QUANTITY = 'quantity',
    ACTION = 'action',
    SCROLL_LEFT = 'scrollLeft',
    SCROLL_RIGHT = 'scrollRight',
}

export enum ButtonThemes {
    RED_SQUARE = 'redSquare',
    BLACK_SQUARE = 'blackSquare',
    CLEAR = 'clear',
    ROUND = 'round'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string | ReactNode;
    className?: string;
    theme?: ButtonThemes;
    types?: ButtonTypes;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        types,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[types]]: true,
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}