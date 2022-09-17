import React from "react";

function ArrayDestructuring() {
    const address=['heello','world','metaverse','accenture'];
    console.log(address[1]);
    const [place,city,state,zip='pincode']=address;
    console.log(place,city,state,zip);
    //if zip is not present then default is pincode
    
  return <div>ArrayDestructuring</div>;
}

export default ArrayDestructuring;
