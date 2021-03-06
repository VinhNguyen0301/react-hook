import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import CreateNewDoc from "./containers/CreateDocument/CreateNewDoc";
import DefineDoc from "./containers/DefineDocProcess/DefineDoc";
import Confirmation from "./containers/ConfirmComponent/Confirmation"

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
            <Route exact path="/create-new-project">
                <CreateNewDoc />
            </Route>
            <Route exact path="/define-process-doc">
                <DefineDoc />
            </Route>
            <Route exact path="/confirmation">
                <Confirmation />
            </Route>
        </Switch>
    );
}