import { Link, Outlet } from "react-router-dom";
import Card from "../../UI/Card";
import AnimeRectCard from "./AnimeRectCard";

const AnimeList = ({ ...props }) => {

  return (
    <>
      <section className="">
        <div>
          {props.userAnimeListData.map((element) => (
            <AnimeRectCard
              key={element.id}
              name={element.name}
              malRating={element.malRating}
              malLink={element.malLink}
              imageURI={element.posterImage.large}
              slug={element.slug}
            />
          ))}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default AnimeList;
