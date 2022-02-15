import SmartText from "../Util/SmartText";
import { useLocation } from "react-router-dom";

const DUMMY_INFO = `In the year 2022, virtual reality has progressed by leaps and
bounds, and a massive online role-playing game called Sword Art
Online (SAO) is launched. With the aid of "NerveGear" technology,
players can control their avatars within the game using nothing but
their own thoughts.\nKazuto Kirigaya, nicknamed "Kirito," is among
the lucky few enthusiasts who get their hands on the first shipment
of the game. He logs in to find himself, with ten-thousand others,
in the scenic and elaborate world of Aincrad, one full of fantastic
medieval weapons and gruesome monsters. However, in a cruel turn of
events, the players soon realize they cannot log out; the game's
creator has trapped them in his new world until they complete all
one hundred levels of the game.\nIn order to escape Aincrad, Kirito
will now have to interact and cooperate with his fellow players.
Some are allies, while others are foes, like Asuna Yuuki, who
commands the leading group attempting to escape from the ruthless
game. To make matters worse, Sword Art Online is not all fun and
games: if they die in Aincrad, they die in real life. Kirito must
adapt to his new reality, fight for his survival, and hopefully
break free from his virtual hell`;

//Rating colors going from 0-100
const ratingColorArr = ["#f90621", "#c64707", "#bf8805", "#8ee815", "#0ab41d"];

const AnimeItem = (props) => {
  const location = useLocation();

  const animeData = location.state.animeData;

  const releaseDate = new Date(animeData.startingDate);

  const month = releaseDate.toLocaleString("default", { month: "long" });
  const year = releaseDate.getFullYear();
  let colorIndex = -1;

  if (0 < animeData.averageRating && animeData.averageRating <= 20) {
    colorIndex = 0;
  } else if (20 < animeData.averageRating && animeData.averageRating <= 40) {
    colorIndex = 1;
  } else if (40 < animeData.averageRating && animeData.averageRating <= 60) {
    colorIndex = 2;
  } else if (60 < animeData.averageRating && animeData.averageRating <= 80) {
    colorIndex = 3;
  } else if (60 < animeData.averageRating && animeData.averageRating <= 100) {
    colorIndex = 4;
  } else {
    //possible negative value
    throw Error("Got negative value for rating from API");
  }

  const specificRatingColorClassName = `text-[${ratingColorArr[colorIndex]}] pl-2`;

  console.log(animeData);

  // const ratingClickHandler = () => {
  //   window.open(props.malLink); //{specificRatingColorClassName}
  // };

  return (
    <div className="p-3 flex flex-row">
      <div className="mr-5 min-w-fit">
        <img
          className=""
          src={animeData.posterImage.medium}
          alt={`${animeData.name}`}
        />
      </div>
      <div className="ml-5 text-white">
        <div className="text-3xl mb-5 ">{animeData.name}</div>
        <div className="text-xl flex flex-col mb-5">
          <span>Episodes : {animeData.episodeCount}</span>
          <span>
            Release Date : {month} {year}
          </span>
          <span>
            Rating : 
            <span className="text-[#bada55]"> 
              {animeData.averageRating}
            </span>
          </span>
        </div>
        <SmartText content={animeData.animeDesc} />
      </div>
    </div>
  );
};

export default AnimeItem;
