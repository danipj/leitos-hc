import React from 'react';


function BedItem(props){

  const { room, id, gender, specialty } = props.bed;

  return(
    <div className='card'>
      <div className='bed-id-block'>
        <span className='key'>{room}</span>
        <span className="value"><span className="key">Leito: </span>{id}</span>
      </div>
      <span className="value"><span className="key">Sexo: </span>{gender}</span>
      <span className="value"><span className="key">Especialidade: </span>{specialty}</span>
      <button onClick={props.onBedClick} className='bed-button'>Alocar</button>
    </div>
  )
}

export default BedItem;
