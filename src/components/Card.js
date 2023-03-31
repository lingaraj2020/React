import "./Card.css";

function Card(props) {
const classes = "card" + props.className;

  return (<div className='card'>{props.childern}</div>);
}

export default Card;