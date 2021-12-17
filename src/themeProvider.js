import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setTheme] = useState("light");

    const handleSetTheme = (color) => {
        switch (color) {
            case "light": 
                setTheme(color);
            case "dark":
                setTheme(color);
            case "blue":
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