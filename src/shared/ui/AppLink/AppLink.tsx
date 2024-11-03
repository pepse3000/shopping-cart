import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkThemes {
    HEADERS = "headers",
    NAVS = "navs",
    CLEAR = "",
    BACKGROUND = "background"
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
    children?: ReactNode;
    square?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme,
        children,
        square
    } = props;

    const appLinkMods = {
        square,
    }

    return (
        <Link to={to} className={classNames(cls.AppLink, appLinkMods, [className, cls[theme]])}>
            {children}
        </Link>
    )
}