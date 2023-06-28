import React, { useContext } from "react";
import { GlobalContext } from "./Context/Globalstate";

export default function Balance(){

    const {transactions}=useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);
    // This is used to calculate the adding of the array get into single val
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <div>
            <p>YOUR BALANCE</p>
            <h1>{total}</h1>
           
        </div>
    )
}