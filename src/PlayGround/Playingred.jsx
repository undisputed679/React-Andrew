import { createStore } from "redux";
import React from "react";

function Playingred() {
    const incrementCount=(payload={})=>({
        type:'INCREMENT',
        incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy : 1
    })
    const decrementCount=({decrementBy=1}={})=>({
        type:'DECREMENT',
        decrementBy
    })
    const store=createStore((state={count:0},action)=>{
        switch(action.type){
            case 'INCREMENT':{
                // const incrementBy=typeof action.incrementBy==='number' ? action.incrementBy:1;
                return {
                    count:state.count + action.incrementBy
                };
            }
            case 'DECREMENT':{
                // const decrementBy=typeof action.decrementBy==='number' ? action.decrementBy:1;
                return {
                    count:state.count-action.decrementBy
                };
            }
            case 'RESET':{
                return {
                    count:0
                };
            }
            default:{
                return state
            }
        }
    });

    store.subscribe(()=>{
    console.log(store.getState());

    })
store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount())

store.dispatch({
    type:'RESET'
});
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:10
// });
store.dispatch(decrementCount({decrementBy:10}))
// console.log(store.getState());
  return <div>
    
  </div>;
}

export default Playingred;

// export  const store=createStore((state={count:0},action)=>{
//     switch(action.type){
//         case 'INCREMENT':{
//             return {
//                 count:state.count+1
//             };
//         }
//     }
// });


