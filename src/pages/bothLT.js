import React, { useContext } from "react";
import { themePalette } from "../helper/theme/themePalette";
import { ThemeContext } from "../helper/theme/themeProvider";
import ThemeSwitch from "../components/themeSwitch";
import { Context } from "../helper/language/languageProvider";
import LanguageSwitch from "../components/languageSwitch";
import { FormattedMessage } from "react-intl";

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
    const context = useContext(Context);
    const { mode } = useContext(ThemeContext);
    
    const styles = getStyles(mode);

    return (
        <div style={styles.app}>
            <div style={{ marginBottom: "20px" }}>
                <div>
                    <a 
                        href="/language"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Language
                    </a>
                </div>
                <div>
                    <a 
                        href="/theme"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Theme
                    </a>
                </div>
                <div>
                    <a 
                        href="/both-lang-theme"
                        style={{ textDecoration: "none" }}
                    >
                        Go to Switch Both Language Theme
                    </a>
                </div>
            </div>
            <LanguageSwitch 
                value={context.locale} 
                onChange={context.selectLanguage} 
            />
            <h1 style={(styles.header, styles.text)}>
                <FormattedMessage
                    id="app.greeting"
                    defaultMessage="Have a nice day...!"
                />
            </h1>
            <h2 style={styles.text}>
                <FormattedMessage
                    id="app.theme"
                    defaultMessage={`Current theme is ${mode} mode`}
                    value={{theme: mode}}
                />
            </h2>
            <ThemeSwitch />
        </div>
    );
};

export default Theme;
