import React from "react";

function FormInput() {
    const app={
        title:'Indecesion App',
        subtitle: 'Put your life ',
        options:['one','two']
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        const option=e.target.value;
        console.log(option);
    }
  return <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p> }
        <p>{app.options.length>0 ? 'here are your Options': 'no Option'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name='option'/>
            <button>Add option</button>
        </form>
        {app.options.map=((option)=>{
            return <li key={option}>{option}</li>
        })}
  </div>;
}

export default FormInput;
