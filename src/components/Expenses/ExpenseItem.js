import React from "react";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDetails.css";
// import Card from "../UI/Card";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("Expense item evaluated by react");

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="btn-click">
        Delete Expense
      </button>
    </div>
  );
};

export default ExpenseItem;
