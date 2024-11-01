
import cls from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

        </div>
    )
}