import {classNames} from "shared/lib/classNames/classNames";
import cls from "./WishPage.module.scss";
import {useAppSelector} from "shared/lib/store/redux";
import {Product} from "entities/Product";

interface WishPageProps {
    className?: string;
}

export const WishPage = ({className}: WishPageProps) => {
    const wishes = useAppSelector(state => state.wishes);

    return (
        <div className={classNames(cls.WishPage, {}, [className])}>

            <div className={cls.wishpage__list}>
                {wishes.map((wish) => (
                    <Product item={wish} />
                ))}
            </div>
        </div>
    )
}