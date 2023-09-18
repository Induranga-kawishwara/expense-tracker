import React, { useContext } from "react";
import { Transtraction } from "./Transtraction";
import { GlobalContext } from "../context/GlobalState";

export const Transtractions = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transactions) => (
          <Transtraction key={transactions.id} transaction={transactions} />
        ))}
      </ul>
    </div>
  );
};
