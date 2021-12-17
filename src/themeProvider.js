import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setTheme] = useState("light");

    return (
        <ThemeContext.Provider
            value={{
                mode,
                // setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
                setTheme: (theme) => {
                    if (mode === "light") {
                        setTheme(theme);
                    } else if (mode === "dark") {
                        setTheme(theme);
                    } else if (mode === "blue") {
                        setTheme(theme);
                    }
                }
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
