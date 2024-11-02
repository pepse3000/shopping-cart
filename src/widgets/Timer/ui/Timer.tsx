import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Timer.module.scss";
import {useEffect, useState} from "react";
import {calculateTime} from "../lib/calculateTime";

interface TimerProps {
    className?: string;
    dueTo?: number;
}

export const Timer = (props: TimerProps) => {
    const {
        className,
        dueTo,
    } = props;

    const [timeLeft, setTimeLeft] = useState(dueTo - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(dueTo - Date.now());
        }, 1000)

        return () => clearInterval(timer);
    }, [dueTo])

    const { days, hours, minutes, seconds } = calculateTime(timeLeft);

    return (
        <div className={classNames(cls.Timer, {}, [className])}>
            <div className={cls.timeBlock}>
                <p>Days</p>
                <p className={cls.time}>{days}</p>
            </div>
            <p className={cls.dots}>:</p>
            <div className={cls.timeBlock}>
                <p>Hours</p>
                <p className={cls.time}>{hours}</p>
            </div>
            <p className={cls.dots}>:</p>
            <div className={cls.timeBlock}>
                <p>Minutes</p>
                <p className={cls.time}>{minutes}</p>
            </div>
            <p className={cls.dots}>:</p>
            <div className={cls.timeBlock}>
                <p>Seconds</p>
                <p className={cls.time}>{seconds}</p>
            </div>
        </div>
    )
}