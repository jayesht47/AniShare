// import Card from "../../UI/Card";
// import { useCallback, useEffect, useState } from "react";
import ImageCard from "../../UI/ImageCard";
// import AnimeGridItem from "./AnimeGridItem";
import { useHistory } from "react-router-dom";

const AnimeGrid = (props) => {
  const history = useHistory();

  const cardClickHandler = (animeData) => {
    console.log(animeData);
    history.push({
      pathname : `/anime/${animeData.slug}`,
      state: { animeData: animeData }

    });
  };


  return (
    <div className="mt-5 flex flex-row m-auto justify-center">
      {props.userAnimeListData.map((element) => {
        return (
          <ImageCard
            key={element.slug}
            onClick={cardClickHandler}
            imageURI={element.imageURI}
            animeData={element}
          />
        );
      })}
    </div>
  );
};

export default AnimeGrid;
