import classes from "./AnimeGridItem.module.css";
import ImageCard from "../../UI/ImageCard";
// import SmartText from "../Util/SmartText";
import Card from "../../UI/Card";

// const DUMMY_INFO = `In the year 2022, virtual reality has progressed by leaps and
// bounds, and a massive online role-playing game called Sword Art
// Online (SAO) is launched. With the aid of "NerveGear" technology,
// players can control their avatars within the game using nothing but
// their own thoughts.\nKazuto Kirigaya, nicknamed "Kirito," is among
// the lucky few enthusiasts who get their hands on the first shipment
// of the game. He logs in to find himself, with ten-thousand others,
// in the scenic and elaborate world of Aincrad, one full of fantastic
// medieval weapons and gruesome monsters. However, in a cruel turn of
// events, the players soon realize they cannot log out; the game's
// creator has trapped them in his new world until they complete all
// one hundred levels of the game.\nIn order to escape Aincrad, Kirito
// will now have to interact and cooperate with his fellow players.
// Some are allies, while others are foes, like Asuna Yuuki, who
// commands the leading group attempting to escape from the ruthless
// game. To make matters worse, Sword Art Online is not all fun and
// games: if they die in Aincrad, they die in real life. Kirito must
// adapt to his new reality, fight for his survival, and hopefully
// break free from his virtual hell`;

const AnimeGridItem = (props) => {
  // const ratingClickHandler = () => {
  //   window.open(props.malLink);
  // };

  return (
    <Card>
      <div className={classes.animeGridItem}>
        <ImageCard imageURI={props.imageURI} />
        <div>
          <div className={classes.animeName}>{props.name} <span className={classes.animeYear}>2002</span></div>
          <div className={classes.animeInfoContainer}>
          <div className ={classes.animeInfo}>Status <span className={classes.field}>{props.status}</span></div>
          <div className ={classes.animeInfo}>Episodes <span className={classes.field}>{props.episodeCount}</span></div>
          <div className ={classes.animeInfo}>Age Rating <span className={classes.field}>{props.ageRating}</span></div>
          <div className ={classes.animeInfo}>Average Rating <span className={classes.field}>{props.AverageRating}</span></div>
          {/* <SmartText content = {DUMMY_INFO} /> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AnimeGridItem;
