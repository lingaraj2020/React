import React from "react";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDetails.css";
import Card from '../UI/Card';
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        loc={props.loc}
        title={props.title}
      />
    </div>
  );
}

export default ExpenseItem;
