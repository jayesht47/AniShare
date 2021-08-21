import classes from "./Card.module.css";
import Delete from "./Delete";

const Card = (props) => {
  const cardClickHandler = () => {
    if (props.onClick === undefined) return;
    props.onClick();
  };

  return (
    <div onClick={cardClickHandler} className={classes.card}>
      {props.children}
      <Delete />
    </div>
  );
};

export default Card;
