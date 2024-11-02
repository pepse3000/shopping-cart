import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PageNavigation.module.scss";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface PageNavigationProps {
    className?: string;
}

export const PageNavigation = ({className}: PageNavigationProps) => {

    return (
        <div className={classNames(cls.PageNavigation, {}, [className])}>
            <ul>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.NAVS}>Clothes</AppLink>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.NAVS}>Electronics</AppLink>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.NAVS}>Furniture</AppLink>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.NAVS}>Shoes</AppLink>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.NAVS}>Miscellaneous</AppLink>
            </ul>
        </div>
    )
}