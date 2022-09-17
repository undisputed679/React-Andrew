import Action from './Action'
import AddOption from './AddOption'
import Counter from './Counter'
import Header from './Header'
import Options from './Options'
import VisiblityToggle from './VisiblityToggle'
import React, { Component } from 'react'
import OptionModal from './OptionModal'

export class IndecisionApp extends Component {
  title = 'Indecision'
  subtitle = 'Put your life in hands of computer'
  constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.state={
      options:[],
      selectedOption:undefined
      // using below we can see options and button will be abeled
        // options:['one', 'two', 'three']
    };
  }
  componentDidMount(){
    try{
      const json=localStorage.getItem('options');
      const options=JSON.parse(json);
      if(options){
        this.setState(()=>({options}))
      }
    }catch(e){

    }
   
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json=JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }
  handleDeleteOptions(){  
    this.setState(()=>({options:[]}))
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options:prevState.options.filter((option)=> optionToRemove!==option)
    }))
  };
  
  handleClearSelectedOption(){
    this.setState(()=>({selectedOption:undefined}))
    console.log(' handle '+this.state.selectedOption);
    
  }

  handlePick= () => {
    const randomnum=Math.floor(Math.random()*this.state.options.length)
    const option=this.state.options[randomnum];
    // console.log("bahar se"+!!option);
    this.setState(()=>({
      ...this.state.selectedOption=option,
      // ...console.log("i am " +this.state.selectedOption),
      // ...console.log("just check "+this.state.selectedOption)
    }));
    // console.log("after state "+this.setState.selectedOption);
  };
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add items'
    }else if(this.state.options.indexOf(option)>-1){
      return 'This Option already exixts'
    }

    this.setState((previousState)=>({
      options:previousState.options.concat(option)
    }))
    // this.setState((previousState)=>{
    //   return {
    //     options:previousState.options.concat(option)
    //   }
    // })
  }
  render() {
    return (
      <div>
        {/* <Header title={this.title} sub={this.subtitle} /> */}
        <Action 
        hasOptions={this.state.options.length>0}
        handlePick={this.handlePick}
        />
        <Options 
        handleDeleteOption={this.handleDeleteOption}
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        /> 
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        {/* <Counter />
        <VisiblityToggle/> */}
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.state.selectedOption=undefined}
        />
        {/* {console.log("handle "+this.state.selectedOption)} */}
        {/* {console.log("props wala "+ this.state.selectedOption)} */}
      </div>
    )
  }
}

export default IndecisionApp

// function IndecisionApp() {
//   const title='Indecision';
//   const subtitle='Put your life in hands of computer';
//   const  options=['one','two','three'];
//   return <div>
//         <Header title={title} sub={subtitle} />
//         <Action/>
//         <Options options={options}/>
//         <AddOption/>
//         <Counter/>
//         <VisiblityToggle/>
//   </div>;
// }
