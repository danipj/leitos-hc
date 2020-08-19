import React, { useState } from 'react';
import CustomNavbar from "./components/CustomNavbar";
import BedAllocation from "./components/BedAllocation";
import PatientSearch from "./components/PatientSearch";
import { Route } from "react-router-dom";

function MainPage(props){

  console.log(props.match.path);

  return(
    <>
      <CustomNavbar />
      <Route exact path={props.match.path} component={BedAllocation}/>
      <Route path={`${props.match.path}/patientSearch`} component={PatientSearch}/>
    </>
  )
}

export default MainPage;
