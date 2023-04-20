import React, { useState, useEffect } from "react";


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
            <p>{seconds}</p>
        </div>
    );
};

export default Counter;