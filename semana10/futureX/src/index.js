import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from "./store";

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path={'/'}/>
                    <Route path={'/adminpage'}/>
                    <Route path={'/listpage'}/>
                    <Route path={'/tripdetail'}/>
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
