import React, { useEffect, useState } from 'react'
import Overlay from '../Overlay';

require('./popup.css');
function Popup(props) {

  return (
    <Overlay isOpen={props.isOpen} onBackgroundClick={() => props.setDisplayPopup(false)} onClicking={e => e.stopPropagation()}>
      <div className="popup-container">
        {props.message}
        <div className="popup-btn-container">
          <div className="popup-btn close-btn" onClick={props.onClose}>
            {props.closeText}
          </div>
          {
            props.confirmBtn &&
            <div className="popup-btn confirm-btn" onClick={props.onConfirm}>
              {props.confirmText}
            </div>
          }
        </div>
      </div>
    </Overlay>
  )
}

export default Popup;
