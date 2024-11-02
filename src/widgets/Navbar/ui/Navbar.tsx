
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
        <div className={classNames(cls.Navbar, {}, [className, "page"])}>
            <span className={cls.shopName}>Exclusive</span>
            <div className={cls.links}>
                <Link to={RoutePath.main}>Home</Link>
                <Link to={RoutePath.contact}>Contact</Link>
                <Link to={RoutePath.about}>About</Link>
                <Link to={RoutePath.sign_up}>Sign Up</Link>
            </div>
            <span>Cart</span>
        </div>
    )
}