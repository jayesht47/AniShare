// import Card from "../../UI/Card";
// import { useCallback, useEffect, useState } from "react";
import ImageCard from "../../UI/ImageCard";
import classes from "./AnimeGrid.module.css";
// import AnimeGridItem from "./AnimeGridItem";

import { useHistory } from "react-router-dom"


const AnimeGrid = (props) => {

  const history = useHistory();


  return (
    <div className={classes.animeGrid}>
      {props.userAnimeListData.map((element) => {
        return (
          <ImageCard  imageURI={element.imageURI} />
          // <AnimeGridItem
          //   key={element.id}
          //   name={element.name}
          //   imageURI={element.imageURI}
          //   status = {element.status}
          //   episodeCount = {element.episodeCount}
          //   ageRating = {element.ageRating}
          //   AverageRating = {element.averageRating}
          //   year = {new Date(element.startingDate).getFullYear()}
          // />
        );
      })}
    </div>
  );
};

export default AnimeGrid;
