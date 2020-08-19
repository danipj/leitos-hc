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
          <Route path="/main" component={MainPage}/>
          <Route path="/" component={LoginPage}/>
        </Switch>
    </Router>
  );
}
