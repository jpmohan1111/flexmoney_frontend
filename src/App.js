import React from "react";

import "./App.less";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import DefaultLayout from "./DefaultLayout";
import "swiper/swiper.less";

const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isLoggedIn");
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/admin" />
      }
    />
  );
};

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  );
};

export default App;
