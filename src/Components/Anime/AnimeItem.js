import { getAnimeDataFromSlug } from "../../services/GetAnimeData";
import SmartText from "../Util/SmartText";
import { useParams } from "react-router-dom";

//Rating colors going from 0-100
const ratingColorArr = ["#f90621", "#c64707", "#bf8805", "#8ee815", "#0ab41d"];

const AnimeItem = (props) => {
  const params = useParams();

  const animeData = getAnimeDataFromSlug(params.slug);
  console.info(animeData); //TODO Redirect to not found page if animeData is null
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

  // const ratingClickHandler = () => {
  //   window.open(props.malLink); //{specificRatingColorClassName}
  // };

  const getAnimeData = (slug) => {};

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
            <span className="text-[#bada55]">{animeData.averageRating}</span>
          </span>
        </div>
        <SmartText content={animeData.animeDesc} />
      </div>
    </div>
  );
};

export default AnimeItem;
