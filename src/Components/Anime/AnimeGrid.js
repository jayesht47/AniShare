// import Card from "../../UI/Card";
// import { useCallback, useEffect, useState } from "react";
import ImageCard from "../../UI/ImageCard";
import classes from "./AnimeGrid.module.css";
// import AnimeGridItem from "./AnimeGridItem";

import { useHistory } from "react-router-dom"
import AnimeItem from "./AnimeItem";


const AnimeGrid = (props) => {

  const history = useHistory();

  const cardClickHandler = slug =>{
    console.log(slug);
    history.push(`/anime/${slug}`);

  }

  return (
    <div className="mt-5 flex flex-row m-auto justify-center">
      {props.userAnimeListData.map((element) => {
        return (
          <ImageCard onClick={cardClickHandler} imageURI={element.imageURI} slug={element.slug} />
        );
      })}
    </div>
  );
};

export default AnimeGrid;
