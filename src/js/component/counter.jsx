import React, { useState, useEffect } from "react";
import { faClockNine } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((old) => old + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div>
            <p><FontAwesomeIcon icon={faClockNine} />{seconds}</p>
        </div>
    );
};

export default Counter;