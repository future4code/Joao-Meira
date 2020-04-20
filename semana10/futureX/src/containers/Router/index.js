import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";




const routes = {
  root: "/",
  adminPage: "/",
  listPage: "/",
  tripDetail: "/",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.adminPage} component={LoginPage}/>
        <Route path={routes.listPage} component={LoginPage}/>
        <Route path={routes.tripDetail} component={LoginPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
