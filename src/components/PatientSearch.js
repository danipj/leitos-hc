import React, { useState, useEffect } from 'react';
import PatientItem from './PatientItem';

const mockPatient = {
  name: 'Marta',
  status: 'moving',
  hasCovid: false,
  specialtyNeeded: 'orto',
  gender: 'female',
  hcid: '73187291'
}

function PatientSearch(props){

  const [search, setSearch] = useState('');
  const [patient, setPatient] = useState();

  function findPatient(){
    setPatient(mockPatient);
  }

  return (
    <div className='patient-search-container'>
      <div style={{marginLeft: 'auto', marginRight: '20px'}}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={'Número do HC'}
        />
        <button onClick={findPatient}>Buscar</button>
      </div>
      {
        patient &&
        <PatientItem patient={mockPatient} actions={true}/>
      }
      {
        !patient &&
        <span className={'no-patient-warning'}>Procure por um paciente</span>
      }
    </div>
  )
}

export default PatientSearch;
