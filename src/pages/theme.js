import React, { useContext } from "react";
import { themePalette } from "../helper/theme/themePalette";
import { ThemeContext } from "../helper/theme/themeProvider";
import ThemeSwitch from "../components/themeSwitch";

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
                <div>
                    <a 
                        href="/library/language"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Language
                    </a>
                </div>
                <div>
                    <a 
                        href="/library/theme"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Theme
                    </a>
                </div>
                <div>
                    <a 
                        href="/library/both"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Both Language Theme
                    </a>
                </div>
            </div>
            <h1 style={(styles.header, styles.text)}>
                Have a nice day...!
            </h1>
            <h2 style={styles.text}>
                Current theme is {mode} mode
            </h2>
            <ThemeSwitch />
        </div>
    );
};

export default Theme;
