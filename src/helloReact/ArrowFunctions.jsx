import React from "react";

function ArrowFunctions() {
    const user={
        name:"Mayank",
        cities:['Gaya','Kolkata','Manali'],
        printPlacesLived(){
            this.cities.forEach((city)=>{
                console.log(this.name+ ' has lived in ' + city);
            });
        }
    }
    user.printPlacesLived()

    //using arrow function
    const user2={
        name:"Mayank",
        cities:['Gaya','Kolkata','Manali'],
        printPlacesLived(){
           return  this.cities.map((city)=> this.name + ' will live in '+ city)
        }
    }
    console.log(user2.printPlacesLived());
    const multiplier={
        num:2,
        array:[2,3,4],
        printnumber(){
            return this.array.map((number)=>this.num*number)
        }
    }
    console.log(multiplier.printnumber());

  return <div>
        
  </div>;
}

export default ArrowFunctions;
