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

    const digitStyle = {
        display: 'inline-block',
        padding: '10px',
        paddingTop: '0px',
        paddingBottom: '0px',
        border: '2px solid rgb(37, 37, 37)',
        borderRadius: '5px',
        margin: '0 5px',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '50px',
        fontFamily: 'Lora',
        backgroundColor: 'rgb(20, 20, 20)'
    };

    const clockStyle = {
        display: 'inline-block',
        paddingTop: '20px',
        paddingBottom: '20px',
        border: '2px solid rgb(37, 37, 37)',
        borderRadius: '5px',
        marginRight: '-8px',
        marginTop: '-15px',
        marginBottom: '-5px',
        fontSize: '80px',
        backgroundColor: 'rgb(20, 20, 20)'
    };

    return (
        <div style={{background: "black"}}>
            <p><Clock style={clockStyle}/> {seconds.toString().padStart(6, '0').split('').map((digit, index) => <span key={index} style={digitStyle}>{digit}{' '}</span>)}</p>
        </div>
    );
};

export default Counter;