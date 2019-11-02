import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./login/Login";
import GenRegister from "./admin-components/GenRegister";
import Register from "./admin-components/Register";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import submitProject from "./Projects/submitProject";
import ProjectsPage from "./Projects/ProjectsPage";
import PageProject from "./Projects/PageProject";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/gen-register" component={GenRegister} />
      <Route path="/register" component={Register} />
      <Route path="/ProjectsPage" component={ProjectsPage} />
      <Route path="/submitProject" component={submitProject} />
      <Route path="/PageProject/:projectId" component={PageProject} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
