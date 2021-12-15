import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Indonesian from "../lang/id.json";
import English from "../lang/en.json";

export const Context=React.createContext();

const local=navigator.language;

let lang;
if (local === "en") {
    lang=English;
} else {
    if (local === "fr") {
        lang=Indonesian;
    } 
    // else {
    //     lang=Arabic;
    // }
}

const Wrapper=(props) => {
    const [locale, setLocale]=useState(local);

    const [messages, setMessages]=useState(lang);

    function selectLanguage(e) {
        const newLocale=e.target.value;
        setLocale(newLocale);
        if (newLocale === "en") {
            setMessages(English);
        } else {
            if (newLocale === "fr"){
                setMessages(Indonesian);
            } else {
                setMessages(Arabic);
            }
        }
    }

    return (
        <Context.Provider value={{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

export default Wrapper;