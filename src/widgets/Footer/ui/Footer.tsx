import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Footer.module.scss";

interface FooterProps {
    className?: string;
}

export const Footer = ({className}: FooterProps) => {

    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.links}>
                <div className={cls.infoContainer}>
                    <p className={cls.head}>Exclusive</p>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                </div>
                <div className={cls.infoContainer}>
                    <p className={cls.head}>Support</p>
                    <p>111 Big Joint Nataha Lumpum, 1515, Bangladesh</p>
                    <p>exclusive@gmail.com</p>
                    <p>+8800-55535-3535</p>
                </div>
                <div className={cls.infoContainer}>
                    <p className={cls.head}>Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className={cls.infoContainer}>
                    <p className={cls.head}>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className={cls.copyright}>
                © Copyright of Copyright 2022. All Rights Reserved
            </div>
        </div>
    )
}