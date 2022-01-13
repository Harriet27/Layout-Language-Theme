import React, { useContext } from "react";
import { themePalette } from "../helper/theme/themePalette";
import { ThemeContext } from "../helper/theme/themeProvider";
import ThemeSwitch from "../components/themeSwitch";
import Header from "../components/header";

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
            <Header />
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
