import {classNames} from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import {PageNavigation} from "widgets/PageNavigation";
import slide1 from 'shared/assets/slides/slide1.png'
import {FC} from "react";
import {FlashSales} from "widgets/FlashSales";
import {Categories} from "widgets/Categories";

interface MainPageProps {
    className?: string;
}

const MainPage: FC = ({className}: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className, "page"])}>
            <div className={cls.navWithSlide}>
                <PageNavigation />
                <img src={slide1} alt="Slide 1"/>
            </div>
            <FlashSales />
            <Categories />
            {/*<PageBestSelling />*/}
        </div>
    )
}

export default MainPage;