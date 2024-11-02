
import cls from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
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
                <AppLink to={RoutePath.main} theme={AppLinkThemes.HEADERS}>Home</AppLink>
                <AppLink to={RoutePath.contact} theme={AppLinkThemes.HEADERS}>Contact</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkThemes.HEADERS}>About</AppLink>
                <AppLink to={RoutePath.sign_up} theme={AppLinkThemes.HEADERS}>Sign Up</AppLink>
            </div>
            <span>Cart</span>
        </div>
    )
}