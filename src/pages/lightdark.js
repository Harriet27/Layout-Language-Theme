import React, { useContext } from "react";
import { themePalette } from "../themePalette";
import { ThemeContext } from "../themeProvider";
import ThemeSwitch from "../themeSwitch";

const getStyles = (mode) => ({
    header: {
        fontSize: 34,
        fontWeight: "400",
    },
    app: {
        height: "100%",
        width: "100%",
        padding: 16,
        backgroundColor: themePalette[mode].backgroundColor,
    },
    text: {
        fontWeight: "200",
        color: themePalette[mode].color,
    },
    theme: {
        color: themePalette[mode].highlight,
    },
});

const Theme = () => {
    const { mode } = useContext(ThemeContext);
    const styles = getStyles(mode);

    return (
        <div style={styles.app}>
            <div>
                <a 
                    href="/"
                    style={{ textDecoration: "none" }}
                >
                    Go to Switch Language
                </a>
            </div>
            <h1 style={(styles.header, styles.text)}>
                Have a nice day...!
            </h1>
            <h2 style={styles.text}>
                Current theme is <span style={styles.theme}>{mode}</span> mode
            </h2>
            <ThemeSwitch />
        </div>
    );
};

export default Theme;
