import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/header";
import "../App.css";

const Experiment = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <div className='App'>
            <Header />
            <div style={{ marginTop: '1rem' }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
            </div>
        </div>
    );
};

export default Experiment;