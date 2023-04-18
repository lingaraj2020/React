import React, { useState } from "react";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDetails.css";
// import Card from "../UI/Card";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(setTitle.title);
  console.log("Expense item evaluated by react");

  const clickHandler = () => {
    setTitle("updated!..");

    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="btn-click" onClick={clickHandler}>
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseItem;
