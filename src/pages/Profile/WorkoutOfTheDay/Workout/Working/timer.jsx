import React from "react";
import { useEffect } from "react";


const TimeCount = ({play, time, setTime}) => {
    

    useEffect(() => {
        let interval = null;
        if (play) {
        interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        } else if (!play) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [play, time]);

    return (
        <span>{time}</span>
    )
};

export default TimeCount;