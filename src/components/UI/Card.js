import "./Card.css";

const Card=(props) =>{
  const classes = "card" + props.className;

  return <div className="card">{props.childern}</div>;
}

export default Card;
