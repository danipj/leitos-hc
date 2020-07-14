import React, { Component } from 'react';

let PatientItem = (props) => {
    const { name, hasCovid, specialtyNeeded, gender } = props.patient;
    return (
        <div className="patient">
            <div className="content">
                <div className="main-block">
                    <span className="specialty">{specialtyNeeded}</span><br/>
                    <span className="gender">{gender} {hasCovid && <img src="../assets/covid.png" className="hasCovid"/>}</span>
                </div>
                <span className="name">{name}</span>
            </div>
        </div>
    );
}
export default PatientItem;