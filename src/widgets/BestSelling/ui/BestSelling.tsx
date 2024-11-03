import {classNames} from "shared/lib/classNames/classNames";
import cls from "./BestSelling.module.scss";

interface BestSellingProps {
    className?: string;
}

export const BestSelling = ({className}: BestSellingProps) => {

    return (
        <div className={classNames(cls.BestSelling, {}, [className])}>
        </div>
    )
}