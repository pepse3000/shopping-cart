import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Slider.module.scss";
import {FC} from "react";

interface SliderItems {
    id: number;
    img: string;
    title: string;
}

interface SliderProps {
    items: SliderItems[];
    onItemClick: () => void;
    className?: string;
}

export const Slider = (props: SliderProps) => {
    const {
        items,
        onItemClick,
        className
    } = props;

    return (
        <div className={classNames(cls.Slider, {}, [className])}>
            {items && items.map((item) => (
                <div key={item.id} className="slide" onClick={onItemClick}>
                    <img src={item.img} alt={item.title}/>
                </div>
            ))}
        </div>
    )
}