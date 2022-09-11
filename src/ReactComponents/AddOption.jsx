import React, { Component } from 'react'

export class AddOption extends Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined,
    }
  }
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() =>({error}));

    if(!error){
        e.target.elements.option.value='';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default AddOption

// function AddOption(props) {
//     const [error, setError] = useState();
//     function handleSubmit(e){
//         e.preventDefault();
//         const option=e.target.elements.option.value.trim();
//         const error=props.handleSubmit(option)
//         setError(error)
//         // if(option){
//         //     props.handleAddOption(option);
//         // }
//     }
//   return <div>
//     <form onSubmit={handleSubmit} >
//         <input type="text" name='option' />
//         <button>submit</button>
//     </form>
//   </div>;
// }
