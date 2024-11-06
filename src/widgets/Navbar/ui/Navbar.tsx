
import cls from "./Navbar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

import cart from "shared/assets/icons/cart.svg"
import wishlist from "shared/assets/icons/wishlist.svg"
import {useAppSelector} from "shared/lib/store/redux";
import {selectCartItemCount} from "entities/Cart/model/selectors";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {
        className
    } = props;

    const cartCounter = useAppSelector(selectCartItemCount);
    const wishCounter = useAppSelector((state) => state.wishes.length);

    return (
        <div className={classNames(cls.Navbar, {}, [className, "page"])}>
            <AppLink to={RoutePath.main} className={cls.shopName}>Exclusive</AppLink>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.HEADERS}>Home</AppLink>
                <AppLink to={RoutePath.contact} theme={AppLinkThemes.HEADERS}>Contact</AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkThemes.HEADERS}>About</AppLink>
                <AppLink to={RoutePath.sign_up} theme={AppLinkThemes.HEADERS}>Sign Up</AppLink>
            </div>
            <div className={cls.rightSide}>
                <AppLink to={RoutePath.wishlist} className={cls.icon}>
                    <img src={wishlist} alt="wishlist"/>
                    <div className={cls.wishCounter}>
                        {wishCounter}
                    </div>
                </AppLink>
                <AppLink to={RoutePath.cart} className={cls.icon}>
                    <img src={cart} alt="cart"/>
                    <div className={cls.itemCounter}>
                        {cartCounter > 99 ? 99 : cartCounter}
                    </div>
                </AppLink>
            </div>
        </div>
    )
}