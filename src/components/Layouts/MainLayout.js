import React from 'react';
import Header from "../header";
import "../../App.css";

const MainLayout = ({ children }) => {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;