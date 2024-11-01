import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    // CONTACT  = 'contact',
    // ABOUT = 'about',
    // SIGN_UP = 'sign_up',
    // CART = 'cart',
    // CHECK_OUT = 'checkout',
    // SHOP = 'shop',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // [AppRoutes.CONTACT]: '/contact',
    // [AppRoutes.ABOUT]: '/about',
    // [AppRoutes.SIGN_UP]: '/sign_up',
    // [AppRoutes.CART]: '/cart',
    // [AppRoutes.CHECK_OUT]: '/checkout',
    // [AppRoutes.SHOP]: '/shop',
    // [AppRoutes.NOT_FOUND]: '/not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    }
}