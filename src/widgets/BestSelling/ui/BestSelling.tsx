import {classNames} from "shared/lib/classNames/classNames";
import cls from "./BestSelling.module.scss";
import {productAPI} from "entities/Product/model/slices/productService";
import {ProductContainer} from "widgets/ProductContainer/ui/ProductContainer";
import {Title} from "shared/ui/Title/Title";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppLink, AppLinkThemes} from "shared/ui/AppLink/AppLink";
import slide from 'shared/assets/slides/slide2.jpg';

interface BestSellingProps {
    className?: string;
}

export const BestSelling = ({className}: BestSellingProps) => {
    const {data: products, error, isLoading} = productAPI.useFetchAllProductsQuery({limit: 8, offset: 20});

    return (
        <div className={classNames(cls.BestSelling, {}, [className])}>
            <Title name="This month"/>
            <div className={cls.wrapper}>
                <h2 className={cls.head}>Best Selling</h2>
                <AppLink
                    to={RoutePath.wishlist}
                    theme={AppLinkThemes.BACKGROUND}
                    className={cls.btn}
                >
                    View All
                </AppLink>
            </div>

            <ProductContainer
                products={products}
                isLoading={isLoading}
                error={error}
                disc
            />

            <img src={slide} alt="Slide"/>
        </div>
    )
}