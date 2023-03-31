import Card from "./Card";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense_location">{props.loc}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}


export default ExpenseDetails;