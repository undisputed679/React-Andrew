import React from "react";

function Play2() {
    const person={
        name:'Manak',
        age:27,
        location:{
            city:'Punjab',
            temp:32
        }
    }
    //it will print anonymous id no name is present
    const {name='Anonymous',age}=person;
    console.log(name,age);
    const{city,temp:temperature}=person.location;
    console.log(city,temperature);
    
    
  return <div>Play2</div>;
}

export default Play2;
