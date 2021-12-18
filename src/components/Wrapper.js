import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import * as languages from "../lang";

export const Context = React.createContext();

const local = navigator.language;

const languageList = {
    id: { 
        language: languages.id,
    },
    en: {
        language: languages.en,
    },
};

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(languageList);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        switch (newLocale) {
            case newLocale:
                setMessages(languageList[newLocale]["language"]);
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
