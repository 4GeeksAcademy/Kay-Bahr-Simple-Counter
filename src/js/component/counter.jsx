import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const Counter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((old) => old + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div style={{background: "black"}}>
            <FontAwesomeIcon icon={icon({name: 'clock-nine', style: 'regular'})} />
            <p style={{color: "white"}}>{seconds}</p>
        </div>
    );
};

export default Counter;