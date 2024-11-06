import {Button, ButtonThemes, ButtonTypes} from "shared/ui/Button/Button";
import {IWishItem} from "entities/WishList/model/types";
import {addWishItem, removeWishItem} from "entities/WishList/model/wishSlice";
import {FC, useEffect, useMemo, useState} from "react";
import cls from './WishButton.module.scss'
import {useAppDispatch, useAppSelector} from "shared/lib/store/redux";
import heart from 'shared/assets/icons/heart.svg';

interface WishButtonProps {
    item: IWishItem;
    className?: string;
}

export const WishButton: FC<WishButtonProps> = (props) => {
    const {
        item,
        className
    } = props;

    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const wishes = useAppSelector((state) => state.wishes);

    const isWish = useMemo(() => {
        return wishes.findIndex((wish) => item.id === wish.id) > -1;
    }, [wishes, item.id])

    useEffect(() => {
        setChecked(isWish);
    }, [isWish, wishes, item.id])

    const handleClick = () => {
        if (!checked) {
            dispatch(addWishItem(item))
            setChecked(true);
        } else {
            dispatch(removeWishItem(item))
            setChecked(false);
        }
    }

    return (
        <Button
            className={className + ` ${checked && cls.checked}`}
            theme={ButtonThemes.ROUND}
            types={ButtonTypes.WISHLIST}
            onClick={handleClick}
        >
            <img src={heart} alt="heart" />
        </Button>
    )
}