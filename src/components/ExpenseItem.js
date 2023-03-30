import './ExpenseDate.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from'./ExpenseDetails';
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
     
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      {/* <ExpenseDetails amount={props.amount} location={props.loc} title={props.title}/> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__location">{props.loc}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
