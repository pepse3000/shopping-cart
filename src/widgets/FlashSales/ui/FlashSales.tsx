import {classNames} from "shared/lib/classNames/classNames";
import cls from "./FlashSales.module.scss";
import {Timer} from "widgets/Timer";

interface FlashSalesProps {
    className?: string;
}

export const FlashSales = ({className}: FlashSalesProps) => {
    return (
        <div className={classNames(cls.FlashSales, {}, [className])}>
            <div className={cls.title}>
                <div className={cls.box}></div>
                <p className={cls.head}>Today's</p>
            </div>
            <div className={cls.timer}>
                <p>Flash Sales</p>
                <Timer dueTo={1731004591000}/>
                <div className={cls.btns}>
                    {/*<Button />*/}
                    {/*<Button />*/}
                </div>
            </div>

            {/*<SaleProducts />*/}
            {/*<Button>View All Products</Button>*/}
        </div>
    )
}