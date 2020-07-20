import React, { useState } from 'react';
import PatientItem from './components/PatientItem';
import BedItem from './components/BedItem';
import Popup from './components/popup';

const beds = [
  {
    room: 'Quarto 2',
    id: 'L190',
    gender: 'Masculino',
    specialty: 'Trauma'
  },
  {
    room: 'Quarto 3',
    id: 'L200',
    gender: 'Feminino',
    specialty: 'Trauma'
  }
]

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

function MainPage(props){

  const [showAlert, setShowAlert] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();
  const [message, setMessage] = useState();

  function handlePatientClick(index){
    setSelectedPatient(index);
  }

  function handleBedClick(bed){
    setMessage((
      <div className='alert-message'>
        <span>Deseja Alocar o leito:</span>
        <span>{bed.id}</span>
        <span>Para o paciente:</span>
        <span>{patients[selectedPatient].name}</span>
      </div>));
    setShowAlert(true);
  }

  return(
    <div className='main'>
      <Popup
        confirmText={'Confirmar'}
        closeText={'Cancelar'}
        confirmBtn={true}
        isOpen={showAlert}
        setDisplayPopup={(value) => setShowAlert(value)}
        message={message}
        onConfirm={() => {setShowAlert(false); setSelectedPatient(null)}}
        onClose={() => setShowAlert(false)}
      />
      <div className='patients'>
        <span className='section-title'>Pacientes aguardando leito</span>
        {
          patients.map((patient, index) => (
            <PatientItem
              patient={patient}
              index={index}
              isSelected={selectedPatient == index}
              onPatientClick={() => handlePatientClick(index)}
            />
          ))
        }
      </div>
      <div className='beds'>
        <span className='section-title'>Leitos disponíveis</span>
        {
          beds.map(bed => (
            <BedItem bed={bed} onBedClick={() => handleBedClick(bed)}/>
          ))
        }
      </div>
    </div>
  )
}

export default MainPage;
