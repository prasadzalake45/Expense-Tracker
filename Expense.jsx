import {React ,useContext}from 'react'
import { GlobalContext } from "./Context/Globalstate";

export default function Expense() {


  const {transactions}=useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount);
  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

   const expense = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
).toFixed(2);




  return (
    <div className='expense-chart'>

        <div className='income'>
            <h4>INCOME</h4>
            <h2 className='money-plus'>+{income}</h2>

        </div>

        <div className='expense'>
        <h4>EXPENSE</h4>
        <h2 className='money-minus'>-{expense}</h2>


        </div>
      
    </div>
  )
}
