import React, { useState } from 'react';
import CustomNavbar from "./components/CustomNavbar";
import BedAllocation from "./components/BedAllocation";


function MainPage(props){

  return(
    <>
      <CustomNavbar />
      <BedAllocation />
    </>
  )
}

export default MainPage;
