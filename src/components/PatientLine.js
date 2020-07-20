import React from 'react';
import PatientItem from './PatientItem';

const patients = [{
  name: 'Marta',
  status: 'moving',
  hasCovid: false,
  specialtyNeeded: 'orto',
  gender: 'female',
  hcid: '73187291'
},
{
  name: 'Joao',
  status: 'waiting',
  hasCovid: false,
  specialtyNeeded: 'trauma',
  gender: 'male',
  hcid: '731821291'
},
{
  name: 'Edson',
  status: 'waiting',
  hasCovid: true,
  specialtyNeeded: 'trauma',
  gender: 'male',
  hcid: '2918291'
},
{
  name: 'Debora',
  status: 'done',
  hasCovid: false,
  specialtyNeeded: 'orto',
  gender: 'female',
  hcid: 'fdjskfjd'
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


function PatientLine(props){

  return (
    <div className='patients'>
      <span>Pacientes em espera</span>
      {
        patients.map((patient, index) => (
          <PatientItem
            patient={patient}
            index={index}
            isSelected={props.selected == index}
            onPatientClick={() => props.onPatientClick(patient, index)}
          />
        ))
      }
    </div>
  )
}

export default PatientLine;
