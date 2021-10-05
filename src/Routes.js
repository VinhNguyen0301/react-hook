import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import { Dashboard } from "./containers/Dashboard/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    );
}