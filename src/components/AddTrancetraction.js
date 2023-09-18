import React, { useState } from "react";

export const AddTrancetraction = () => {
  const [text, setText] = useState("");
  const [amount, setAmont] = useState(0);
  return (
    <div>
      <h3>Add New Transtraction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text........"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative-expense,positive-income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmont(e.target.value)}
            placeholder="Enter Amount........"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
