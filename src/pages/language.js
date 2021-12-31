import React, { useContext } from "react";
import logo from "../logo.svg";
import "../App.css";
import LanguageSwitch from "../components/languageSwitch";
import { Context } from "../helper/language/languageProvider";
import { FormattedMessage } from "react-intl";

const Lang = (props) => {
    const context = useContext(Context);

    return (
        <div className="App">
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
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" style={{ height: "200px" }} />

                {/* SELECT LANGUAGE */}
                <LanguageSwitch 
                    value={context.locale} 
                    onChange={context.selectLanguage} 
                />
                {/* .SELECT LANGUAGE */}

                {/* CONTENT */}
                <p>
                    <FormattedMessage
                        id="app.header"
                        defaultMessage="Edit <strong>src/App.js</strong> and save to reload"
                        values={{ fileName: "src/App.js", strong: (word) => <strong>{word}</strong> }}
                    />
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FormattedMessage
                        id="app.content"
                        defaultMessage="Learn React"
                    />
                </a>
                <FormattedMessage
                    id="app.author"
                    defaultMessage="Tutorial brought to you by A.N.H"
                    values={{ blogName: "A.N.H" }}
                />
                {/* .CONTENT */}

            </header>
        </div>
    );
};

export default Lang;
