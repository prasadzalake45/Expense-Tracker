import React, { useReducer } from 'react'
const initialState=0
const reducer=(state,action)=>{
   switch(action){
    case "Increment":
        return state+1
    case "Decrement":
        return state-1
   }
}
export default function Counter() {
    const [count,dispatch]=useReducer(reducer,initialState)

  return (

    
    <div>
     <h1>{count}</h1>
      <button className='increment' onClick={()=>dispatch("Increment")} >Increment</button>
      <button className='decrement' onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}
