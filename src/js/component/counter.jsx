import React, { useState, useEffect } from "react";
import { Clock } from 'react-bootstrap-icons';

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
            <Clock />
            <p style={{color: "white"}}>{seconds}</p>
        </div>
    );
};

export default Counter;