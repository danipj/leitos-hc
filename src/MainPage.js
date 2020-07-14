import React, { Component } from "react";
import Row from "./components/Row";

class MainPage extends Component { // should talk to redux, get info from backend, etc
  constructor() {
    super();
  }

  render() {
    return (
    <div>
     WAITING: <Row status="waiting"/>
      MOVING: <Row status="moving"/>
      DONE: <Row status="done"/>
    </div>
    );
  }
}

export default MainPage;
