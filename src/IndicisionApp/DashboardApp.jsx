import React, { useState } from 'react'
import ActionApp from './ActionApp'
import AddOptionApp from './AddOptionApp'
import CounterI from './CounterI'
import End from './End'
import HeaderI from './HeaderI'
import Modal from './Modal'
import OptionsApp from './OptionsApp'
import VisiblityToggleApp from './VisiblityToggleApp'

function DashboardApp() {
  const title = 'Indecision';
  const subtitle = 'Put your life in hands of computer';
  const [Options, setOptions] = useState(['a', 'b', 'c']); 
  const [modal,setModal]=useState(undefined)

  const handlePick= () => {
    const randomnum=Math.floor(Math.random()*Options.length)
    const option=Options[randomnum];
    setModal(option)
  };

 const  handleAddOption=(option)=>{
    if(!option){
      return 'Enter valid value to add items'
    }else if(Options.indexOf(option)>-1){
      return 'This Option already exixts'
    }
    setOptions([...Options, option]);
    // console.log(Options);
    // setOptions((previousState)=>({
    //   Options:previousState.Options.concat(option)
    // }))
}
const handleDeleteOption=(optionToRemove)=>{
    setOptions(Options.filter((option)=> optionToRemove!==option)
    )
  };
const handleDeleteOptions=()=>{  
    setOptions([])
  }
const handleClearSelectedOption=()=>{
    setModal(undefined)  
  }

  return (
    <div>
      <HeaderI
        title={title}
        subtitle={subtitle}
      />
      <CounterI />
      <ActionApp
         hasOptions={Options.length>0}
         handlePick={handlePick}
      />
      <OptionsApp
        handleDeleteOptions={handleDeleteOptions}
        options={Options}
        handleDeleteOption={handleDeleteOption}
      />
      <AddOptionApp
       handleAddOption={handleAddOption}
      />
      <Modal
         selectedOption={modal}
         handleClearSelectedOption={handleClearSelectedOption}
      />
      <VisiblityToggleApp/>
      <End/>
    </div>
  )
}

export default DashboardApp;
