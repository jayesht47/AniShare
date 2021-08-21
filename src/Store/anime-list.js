import { useState } from "react";
import React from "react";

const AnimeListContext = React.createContext({
  animeList: [],
});

const AnimeListContextProvider = (props) => {
  const [userAnimeList, setUserAnimeList] = useState([]);

  return (
    <AnimeListContext.Provider value={{ userAnimeList: userAnimeList, setUserAnimeList:setUserAnimeList }}>
      {props.children}
    </AnimeListContext.Provider>
  );
};

export default AnimeListContext;
export {AnimeListContextProvider};