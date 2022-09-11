import React, { Component } from "react";

export class Counter extends Component {
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleremove=this.handleremove.bind(this);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        const stringCount=localStorage.getItem('count');
        const count=parseInt(stringCount,10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
        }
    }
    handleAddOne(){
        this.setState((previousState)=>{
            // console.log(previousState.count);
            return{   
                count:previousState.count+1
            }
        })
    }
    handleMinusOne(){
        this.setState((previousState)=>{
            return{
                count:previousState.count-1
            }
        })
    }
    handleremove(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
  render() {
    
    return <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleremove}>Reset</button>
    </div>;
  }
}

export default Counter;
