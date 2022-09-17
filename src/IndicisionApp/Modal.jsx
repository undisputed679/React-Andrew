import React from "react";
import ReactModal from "react-modal";

function Modal(props) {
  return <div>
     <ReactModal
    isOpen={!!props.selectedOption} 
    contentLabel="selectedOption"
    appElement={document.getElementById('root')}
  >
    {/* {console.log("andar se"+!props.selectedOption)} */}
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p> }
    <button onClick={props.handleClearSelectedOption} >okay</button>
  </ReactModal>
  </div>;
}

export default Modal;
