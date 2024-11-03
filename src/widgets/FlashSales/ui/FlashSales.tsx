import {classNames} from "shared/lib/classNames/classNames";
import cls from "./FlashSales.module.scss";
import {Timer} from "widgets/Timer";
import {ProductContainer, ProductContainerTypes} from "widgets/ProductContainer/ui/ProductContainer";
import {Button, ButtonThemes, ButtonTypes} from "shared/ui/Button/Button";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useRef} from "react";
import {Title} from "shared/ui/Title/Title";

interface FlashSalesProps {
    className?: string;
}

export const FlashSales = ({className}: FlashSalesProps) => {
    const productContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
            productContainerRef.current.scrollLeft -= 215;
    };

    const scrollRight = () => {
            productContainerRef.current.scrollLeft += 215;
    };

    return (
        <div className={classNames(cls.FlashSales, {}, [className])}>
            <Title name="Today's"/>
            <div className={cls.timer}>
                <p>Flash Sales</p>
                <Timer dueTo={1731004591000}/>
                <div className={cls.btns}>
                    <Button
                        theme={ButtonThemes.ROUND}
                        types={ButtonTypes.SCROLL_LEFT}
                        onClick={scrollLeft}
                    />
                    <Button
                        theme={ButtonThemes.ROUND}
                        types={ButtonTypes.SCROLL_RIGHT}
                        onClick={scrollRight}
                    />
                </div>
            </div>

            <ProductContainer ref={productContainerRef} types={ProductContainerTypes.FLASH_SALES}/>

            <div className={cls.centerWrapper}>
                <AppLink className={cls.link} to={RoutePath.contact} theme={AppLinkThemes.BACKGROUND}>
                    View All Products
                </AppLink>
            </div>

            <div className="line"></div>
        </div>
    )
}