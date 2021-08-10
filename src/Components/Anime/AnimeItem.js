import Card from "../../UI/Card";
import classes from "./AnimeItem.module.css";

const AnimeItem = (props) => {
  const ratingClickHandler = () => {
    window.open(props.malLink);
  };

  return (
    <li>
      <div className={classes.animeItem}>
        <div className={classes.animeName}>{props.name}</div>
        <div className={classes.rating}>
          <Card onClick={ratingClickHandler}>{props.malRating}</Card>
        </div>
      </div>
    </li>
  );
};

export default AnimeItem;
