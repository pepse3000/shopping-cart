import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h1>404 Not Found</h1>
            <p>You visited page not found. You may go home page.</p>
            <AppLink to={RoutePath.main} theme={AppLinkThemes.BACKGROUND}>Back to home page</AppLink>
        </div>
    )
}