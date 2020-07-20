import React, { Component } from 'react';

let PatientItem = (props) => {
    const { name, hasCovid, specialtyNeeded, gender, hcid, doctor } = props.patient;
    return (
        <div className="card"
          style={{backgroundColor: props.isSelected? 'lightblue': 'white', cursor: 'pointer'}}
          onClick={props.onPatientClick}
        >
            <div className="content">

                <div className="main-block">
                    <span className="value"><span className="key">Nome: </span>{name}</span>
                    <span className="value" style={{marginLeft: 'auto'}}><span className="key">id: </span>{hcid}</span>
                </div>
                <span className="value"><span className="key">Médico: </span>{doctor}</span>
                <span className="value"><span className="key">Especialidade: </span>{specialtyNeeded}</span>
                <span className="value"><span className="key">Sexo: </span>{gender}</span>
                <span className="value" style={{marginTop: "10px"}}><span className="key">COVID: </span>{hasCovid? "SIM": "NÃO"}</span>
            </div>
        </div>
    );
}
export default PatientItem;
