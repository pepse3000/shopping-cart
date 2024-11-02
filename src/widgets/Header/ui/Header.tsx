import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Header.module.scss";

interface HeaderProps {
    className?: string;
}

export const Header = ({className}: HeaderProps) => {

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
    )
}