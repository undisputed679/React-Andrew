import React, { Component } from "react";

export class VisiblityToggle extends Component {
    constructor(props){
        super(props);
        this.handleToggleVisiblity=this.handleToggleVisiblity.bind(this)
        this.state={
            visiblity:false
        }
    }
    handleToggleVisiblity(){
        this.setState((previousState)=>{
            // console.log(previousState.visiblity);   
            return{
                visiblity:!previousState.visiblity
            }    
        })
    }
  render() {
    return <div>
        <h1>VisiblityToggle</h1>
        <button onClick={this.handleToggleVisiblity} >
            {this.state.visiblity?'Hide details':'show details'}
        </button>
        {this.state.visiblity && (
            <div>
                <p>Now you can see some details</p>
            </div>
        )}

    </div>;
  }
}

export default VisiblityToggle;
