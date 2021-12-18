import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setTheme] = useState("light");

    const handleSetTheme = (color) => {
        switch (color) {
            case color: 
                setTheme(color);
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                mode,
                // setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
                setTheme: (theme) => handleSetTheme(theme),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
