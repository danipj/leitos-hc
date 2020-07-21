import React, { Component } from "react";
import PatientItem from "./PatientItem";

class PatientColumn extends Component {
  constructor(props) {
    super(props);

    const patients = [{
      name: 'Marta',
      status: 'moving',
      hasCovid: false,
      specialtyNeeded: 'orto',
      gender: 'female'
    },
    {
      name: 'Joao',
      status: 'waiting',
      hasCovid: false,
      specialtyNeeded: 'trauma',
      gender: 'male'
    },
    {
      name: 'Edson',
      status: 'waiting',
      hasCovid: true,
      specialtyNeeded: 'trauma',
      gender: 'male'
    },
    {
      name: 'Debora',
      status: 'done',
      hasCovid: false,
      specialtyNeeded: 'orto',
      gender: 'female'
    },
    {
      name: 'Marta',
      status: 'moving',
      hasCovid: false,
      specialtyNeeded: 'orto',
      gender: 'female'
    },
    {
      name: 'Joao',
      status: 'waiting',
      hasCovid: false,
      specialtyNeeded: 'trauma',
      gender: 'male'
    },
    {
      name: 'Edson',
      status: 'waiting',
      hasCovid: true,
      specialtyNeeded: 'trauma',
      gender: 'male'
    },
    {
      name: 'Debora',
      status: 'done',
      hasCovid: false,
      specialtyNeeded: 'orto',
      gender: 'female'
    },
    {
      name: 'Debora',
      status: 'done',
      hasCovid: true,
      specialtyNeeded: 'orto',
      gender: 'female'
    }]

    let filteredByStatus = patients.filter(p=>p.status === props.status)

    this.state = {
      totalItems: filteredByStatus.length,
      patients: filteredByStatus
    };
  }

  getItemsPerRow(){
    let rowItems = [];
    for (let index = 0; index < this.state.totalItems; index++) {
      rowItems.push(<PatientItem patient={this.state.patients[index]} key={index+2}/>);
    }
    return rowItems;
  }

  render() {
    return (
      <div className="row">
        {this.getItemsPerRow()}
      </div>
    );
  }
}

export default PatientColumn;
