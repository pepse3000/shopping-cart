import cls from "./Title.module.scss";
import {FC} from "react";

interface TitleProps {
    name?: string;
}

export const Title: FC<TitleProps> = (props) => {
    const {
        name,
    } = props;

    return (
        <div className={cls.title}>
            <div className={cls.box}></div>
            <p className={cls.head}>{name}</p>
        </div>
    )
}