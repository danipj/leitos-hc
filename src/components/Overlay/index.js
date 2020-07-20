import React, { useEffect, useState } from 'react';

require('./overlay.css');

function Overlay(props) {

  const { onClicking, isOpen, onBackgroundClick, backgroundColor, zIndex} = props;

  const style = {};
  if(backgroundColor) {
    style.backgroundColor = backgroundColor;
    style.opacity = 0.7;
  }

  if(zIndex){
    style.zIndex = zIndex;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className='overlay' onClick={onBackgroundClick} style={style}>
      <span className="overlay-content" onClick={onClicking}>
        {props.children}
      </span>
    </div>
  )

}

export default Overlay;
