import React, { Component } from "react";
import PatientColumn from "./components/PatientColumn";
import CustomNavbar from "./components/CustomNavbar";
import BedMap from "./components/BedMap";

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar />
        <PatientColumn />
        <BedMap />
      </React.Fragment>
    );
  }
}

export default MainPage;
