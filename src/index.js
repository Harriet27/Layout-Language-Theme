import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import ThemeProvider from "./themeProvider";

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <Wrapper>
                <App date={Date.now()} />
            </Wrapper>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
