import {RouteProps} from "react-router-dom";
import {MainPageAsync} from "pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    CONTACT  = 'contact',
    ABOUT = 'about',
    SIGN_UP = 'sign_up',
    CART = 'cart',
    // CHECK_OUT = 'checkout',
    // SHOP = 'shop',
    WISH_LIST = 'wishlist',
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CONTACT]: '/contact',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SIGN_UP]: '/sign_up',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.WISH_LIST]: '/wishlist',
    // [AppRoutes.CHECK_OUT]: '/checkout',
    // [AppRoutes.SHOP]: '/shop',
    // [AppRoutes.NOT_FOUND]: '/not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />
    },
    [AppRoutes.CONTACT]: {
        path: RoutePath.contact,
        element: <h1>Hello</h1>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <h1>Hello</h1>
    },
    [AppRoutes.SIGN_UP]: {
        path: RoutePath.sign_up,
        element: <h1>Hello</h1>
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <h1>Hello</h1>
    },
    [AppRoutes.WISH_LIST]: {
        path: RoutePath.wishlist,
        element: <h1>Wishlist</h1>
    }

}