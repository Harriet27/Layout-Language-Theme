import React from 'react';
import Header from "../header";
import "../../App.css";

const Experiment = ({ children }) => {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    );
};

export default Experiment;