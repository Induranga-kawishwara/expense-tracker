import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";



export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const totalAmount= amounts.reduce((accumulatedValue , currentValue)=> accumulatedValue +currentValue)

  return( 
  <>
    <h1>Your Balance</h1>
    <h1 className="balance">${totalAmount}</h1>
  </>
  )
};
