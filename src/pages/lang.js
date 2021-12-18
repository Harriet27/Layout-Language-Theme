import React, { useContext } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Context } from "../components/Wrapper";
import { FormattedMessage } from "react-intl";

const Lang = (props) => {
    const context = useContext(Context);

    return (
        <div className="App">
            <div style={{ margin: "10px 0px" }}>
                <a 
                    href="/light-dark"
                    style={{ textDecoration: "none" }}
                >
                    Go to Switch Theme
                </a>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {/* SELECT LANGUAGE */}
                <select value={context.locale} onChange={context.selectLanguage}>
                    <option value="en">
                        English
                    </option>
                    <option value="id">
                        Indonesian
                    </option>
                    <option value="ch">
                        Chinese
                    </option>
                </select>
                {/* .SELECT LANGUAGE */}

                {/* CONTENT */}
                <p>
                    <FormattedMessage
                        id="app.header"
                        defaultMessage="Edit the files and save to reload"
                        values={{ fileName: "src/App.js", code: (word) => <strong>{word}</strong> }}
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
