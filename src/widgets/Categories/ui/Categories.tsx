import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Categories.module.scss";
import {Title} from "shared/ui/Title/Title";

import shoes from 'shared/assets/icons/shoes.svg'
import clothes from 'shared/assets/icons/clothes.svg'
import furniture from 'shared/assets/icons/furniture.svg'
import misc from 'shared/assets/icons/misc.svg'
import electronics from 'shared/assets/icons/electronics.svg'

import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface CategoriesProps {
    className?: string;
}

export const Categories = ({className}: CategoriesProps) => {

    return (
        <div className={classNames(cls.Categories, {}, [className])}>
            <Title name="Categories"/>

            <div className={cls.categoryList}>
                <AppLink to={RoutePath.main} className={cls.categoryItem}>
                    <img src={clothes} alt="clothes"/>
                    Clothes
                </AppLink>
                <AppLink to={RoutePath.main} className={cls.categoryItem}>
                    <img src={furniture} alt="furniture"/>
                    Furniture
                </AppLink>
                <AppLink to={RoutePath.main} className={cls.categoryItem}>
                    <img src={electronics} alt="electronics"/>
                    Electronics
                </AppLink>
                <AppLink to={RoutePath.main} className={cls.categoryItem}>
                    <img src={shoes} alt="shoes"/>
                    Shoes
                </AppLink>
                <AppLink to={RoutePath.main} className={cls.categoryItem}>
                    <img src={misc} alt="misc"/>
                    Miscellaneous
                </AppLink>
            </div>

            <div className="line"></div>
        </div>
    )
}