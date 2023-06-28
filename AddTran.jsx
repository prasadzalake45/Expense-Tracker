import React, { useContext } from 'react'
import { GlobalContext } from "./Context/Globalstate";

export default function AddTran() {
   const [text,setText]=React.useState(" ")
   const [amount,setAmount]=React.useState(0)
   const { addTransaction}=useContext(GlobalContext)
   
   function textChange(event){
    setText(event.target.value)

   }
   function amountChange(event){
    setAmount(event.target.value)

   }
   const onSubmit=(e)=>{
    e.preventDefault();
    const newTransaction={
      id:Math.floor(Math.random()*100000000),
      text,
      amount:+amount //convert into number

    }
    addTransaction(newTransaction)

   }

  return (
   <div className='tran'>
    <h3>Add new transaction</h3>
    <hr></hr>

    <form onSubmit={onSubmit} action="">
        <div className='text'>
       <label htmlFor="text">Text</label>
       <input type="text" value={text} onChange={textChange} placeholder='Enter Text'/>
       </div>

       <div className='amout'>
       <label htmlFor="amout">Amount</label>
       <br />
       (negative-expense,positive-Income)
       <input type="text" value={amount} onChange={amountChange} placeholder='Enter Amout...'/>

       </div>

    <button className='btn'>Add Transaction</button>
    </form>
    
      
    </div>

  )
}
