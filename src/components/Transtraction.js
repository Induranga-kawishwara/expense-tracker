import React from "react";

export const Transtraction = () => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};
