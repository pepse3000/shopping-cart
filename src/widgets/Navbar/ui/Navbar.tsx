
import cls from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={RoutePath.main}>main</Link>
        </div>
    )
}