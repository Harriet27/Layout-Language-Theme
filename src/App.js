import React, {useContext} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Context } from "./components/Wrapper";
import { 
  FormattedMessage,
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedTime,
} from "react-intl";

function App(props) {
  const context = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* SELECT LANGUAGE */}
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value= "en">
            English
          </option>
          <option value= "id">
            Indonesian
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
        <br/><br/>
        <FormattedDate
          value={props.date}
          year="numeric"
          month= "long"
          day="numeric"
          weekday="long"
        />
        <br/>
        <FormattedNumber
          value={20.42}
          style="currency"
          currencyDisplay="symbol"
          currency="USD"
        />
        <br/>
        <FormattedNumber
          value={10000}
        />
        <br/>
        <FormattedTime
          value={new Date()}
          hour="numeric"
          minute="numeric"
          second="numeric"
          timeZoneName="long"
        />
        {/* .CONTENT */}

      </header>
    </div>
  );
}

export default App;
