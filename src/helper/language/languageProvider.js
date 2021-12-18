// DO NOT TOUCH - ALDRICH
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import * as languages from "../../languages";

export const Context = React.createContext();

const local = navigator.language;

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(languages);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        switch (newLocale) {
            case newLocale:
                setMessages(languages[newLocale]);
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
