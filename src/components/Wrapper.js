import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Indonesian from "../lang/id.json";
import English from "../lang/en.json";

export const Context = React.createContext();

const local = navigator.language;

let language;
if (local === "en") {
    language = English;
} else if (local === "id") {
    language = Indonesian;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(language);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
        } else if (newLocale === "id") {
            setMessages(Indonesian);
        }
    };

    return (
        <Context.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

export default Wrapper;