import React, { useContext } from "react";
import { themePalette } from "../helper/theme/themePalette";
import { ThemeContext } from "../helper/theme/themeProvider";
import ThemeSwitch from "../components/themeSwitch";
import { Context } from "../helper/language/languageProvider";
import LanguageSwitch from "../components/languageSwitch";
import { FormattedMessage } from "react-intl";
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

const LanguangeTheme = () => {
    const context = useContext(Context);
    const { mode } = useContext(ThemeContext);
    
    const styles = getStyles(mode);

    return (
        <div style={styles.app}>
            <Header />
            <br />
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
                    defaultMessage={"Current theme is <strong>" + mode + "</strong> mode"}
                    values={{ theme: mode, strong: (word) => <strong>{word}</strong> }}
                />
            </h2>
            <ThemeSwitch />
        </div>
    );
};

export default LanguangeTheme;
