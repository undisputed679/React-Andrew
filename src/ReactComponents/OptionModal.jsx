import React from 'react'
import Modal from 'react-modal';

const OptionModal=(props)=> (
    // console.log("current value"+ !props.selectedOption), 
    // console.log("yaha hu mai "+props.selectedOption),
    <Modal
    isOpen={!!props.selectedOption} 
    contentLabel="selectedOption"
  >
    {/* {console.log("andar se"+!props.selectedOption)} */}
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p> }
    <button onClick={props.handleClearSelectedOption} >okay</button>
  </Modal>
)
  

export default OptionModal
