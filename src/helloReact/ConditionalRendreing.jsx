import React from "react";

function ConditionalRendreing() {
    var user={
        // name:"Mayank",
        age:22,
        location:"Kolkata"
    }
    var app={
        title:"Indecesion",
        subtitle:"Here are our options",
        options:['one','two']
    }
    function getLocation(location) {
        if(location){
            return location;
        }else{
            return "Unknown";
        }
    }
    function getLocation1(location) {
        if(location){
            return <p>User location is {location} </p>
        }else{
            // using undefined removes every thing its like blank
            return undefined;
        }
    }
    
  return <div>
    
        <h1>Indecision App</h1>
        {/* name is shown using terniary operator */}
        {app.subtitle &&  <h3>{app.subtitle}</h3>  }
        {/* {app.options.length>0? <p>here are your options</p>: <p>No options</p> } */}
        <p>{app.options.length>0 ? "here are your options" : "No options"}</p>

        <p>User name is <b>{user.name ? user.name:"Anonymous"}</b> </p>
        {/* user age is shown using and operator */}
        {(user.age&&user.age>=18) && <p>User age is <b> {user.age} </b> </p>}
        <p>User location <b> {getLocation(user.location)} </b> </p>

        {/* we can also do it in this way */}

        {getLocation1(user.location)}
  </div>;
}

export default ConditionalRendreing;
