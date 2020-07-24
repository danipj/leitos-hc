import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/users">
            <>teste</>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
    </Router>
  );
}