import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setTheme] = useState("light");

    const handleSetTheme = (color) => {
        if (mode === "light") {
            setTheme(color);
        } else if (mode === "dark") {
            setTheme(color);
        } else if (mode === "blue") {
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
