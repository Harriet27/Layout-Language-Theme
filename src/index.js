import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./helper/language/languageProvider";
import ThemeProvider from "./helper/theme/themeProvider";
import "antd/dist/antd.css"; // "antd/dist/antd.less" or "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';
import { applyMiddleware, createStore } from "redux";

const queryClient = new QueryClient();
const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={globalStore}>
            <ThemeProvider>
                <LanguageProvider>
                    <QueryClientProvider client={queryClient}>
                        <App date={Date.now()} />
                    </QueryClientProvider>
                </LanguageProvider>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
