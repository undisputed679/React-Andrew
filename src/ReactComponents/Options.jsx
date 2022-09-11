import Option from "./Option";

// import React, { Component } from 'react'

import React from 'react'

function Options(props) {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length===0 && <p>Please add an option to get started</p>}
    {
    props.options.map((option)=>(
        <Option
         key={option} 
         optionText={option}
         handleDeleteOption={props.handleDeleteOption}
         /> 
    ))
    }
    </div>
  )
}

export default Options

// export class Options extends Component {
// constructor(props){
//     super(props);
//     this.handleRemoveAll=this.handleRemoveAll.bind(this);
// }
//     handleRemoveAll(){
//         alert('Clicked remove all')
//     }

//   render() {
//     return (
//         <div>
   

//       </div>
//     )
//   }
// }

// export default Options
