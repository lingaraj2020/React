import './ExpenseDate.css';
import ExpenseDate from './ExpenseDate';
import './ExpenseDetails.css';
import ExpenseDetails from'./ExpenseDetails';
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
     
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount}  loc={props.loc}   title={props.title} />
    </div>
  );
}

export default ExpenseItem;
