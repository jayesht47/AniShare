import { Fragment, useContext } from "react";
import AnimeGrid from "./Components/Anime/AnimeGrid";
// import AnimeList from "./Components/Anime/AnimeList";
import ListSummary from "./Components/ListSummary";
import Login from "./Components/Login/Login";
import Header from "./Layout/Header";
import AuthContext from "./Store/auth-context";
import { useState,useCallback,useEffect } from "react";


function App() {

  const authContextData = useContext(AuthContext);

  const [animeList,setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnimeHandler = useCallback(async () => {
    const userAnimeList = [6589, 41024];

    setIsLoading(true);
    setError(null);

    try {

      const userAnimeListData = [];

      for (const anime of userAnimeList) {
        const response = await fetch(`http://localhost:9092/anime/${anime}`);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const animeData = await response.json();

        console.info(animeData);

        userAnimeListData.push({
          id: animeData.animeId,
          imageURI: animeData.posterImage.tiny,
          name: animeData.animeName,
          status : animeData.status,
          ageRating : animeData.ageRating,
          episodeCount : animeData.episodeCount,
          averageRating : animeData.rating,
          startingDate : animeData.startingDate

        });

        console.log(userAnimeListData);
        setAnimeList(userAnimeListData);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAnimeHandler();
  }, [fetchAnimeHandler]);

  let content = <p>No Anime Found</p>;

  if(animeList.length > 0 ) content =  <AnimeGrid userAnimeListData = {animeList} userName = "Jayesh"/>

  return (
    <Fragment>
      <Header />
      {! authContextData.isLoggedIn &&  <Login/>}
      {authContextData.isLoggedIn && <ListSummary userName = "Jayesh"/>}
      {/* {authContextData.isLoggedIn && <AnimeList userName = "Jayesh"/>} */}
      {authContextData.isLoggedIn && content }
    </Fragment>
  );
}

export default App;
