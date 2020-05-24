import React, { Fragment } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Header from "../Header";
import AdminPage from "../AdminPage";
import ApplicationPage from "../ApplicationPage";
import TripsListPage from "../TripsListPage";
import TripDetailsPage from "../TripDetailsPage";
import Footer from '../../components/Footer'



export const routes = {
  root: "/",
  adminPage: "/adminpage",
  applicationPage: "/application",
  tripsListPage: "/tripslist",
  tripDetailsPage: "/tripdetails",
};





function Router(props) {
  return (
    <Fragment>
      <Header/>
      <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.adminPage} component={AdminPage}/>
        <Route exact path={routes.applicationPage} component={ApplicationPage}/>
        <Route exact path={routes.tripsListPage} component={TripsListPage}/>
        <Route exact path={routes.tripDetailsPage} component={TripDetailsPage}/>
      </Switch>
      </ConnectedRouter>
      <Footer/>
    </Fragment>
  );
}


export default Router;
