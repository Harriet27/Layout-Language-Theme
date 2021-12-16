import React, { useContext } from "react";
import { theme } from "../theme";
import { ThemeContext } from "../provider";
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
        backgroundColor: theme[mode].backgroundColor,
    },
    text: {
        fontWeight: "200",
        color: theme[mode].color,
    },
    theme: {
        color: theme[mode].highlight,
    },
});

const Theme = () => {
    const { mode } = useContext(ThemeContext);
    const styles = getStyles(mode);

    return (
        <div style={styles.app}>
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
