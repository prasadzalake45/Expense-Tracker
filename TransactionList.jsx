import React, { useContext } from 'react'
import Transaction from "./Transaction.jsx"


import { GlobalContext } from "./Context/Globalstate";


const TransactionList = () => {
    const {transactions}=useContext(GlobalContext)


  return (
    
  <div className='History-chart'>
    <h3 >History</h3>
    <hr />
    <br></br>
    <br />
    <ul className="list">
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
    </ul>
    </div>
  )
}

export default TransactionList

