import React from 'react'

function Jsxexpression() {
    var variableName="Mike";
    var user={
        name:"Mayank",
        age:22,
        location:"Kolkata"
    }
  return (
    <div>  
      <h1>Indecision app</h1>
      <p>I am lower case {variableName} </p>
      <p>I am a {variableName.toUpperCase()}</p>
      <p>The values of variable user</p>
      <p>user name is <b>{user.name}</b>  </p>
      <p>user age is <b>{user.age}</b> </p>
      <p>user location is <b>{user.location}</b> </p>
    </div>
  )
}

export default Jsxexpression
