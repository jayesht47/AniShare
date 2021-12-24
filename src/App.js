import { Fragment, useContext } from "react";
import AnimeGrid from "./Components/Anime/AnimeGrid";
// import AnimeList from "./Components/Anime/AnimeList";
import ListSummary from "./Components/ListSummary";
import Login from "./Components/Login/Login";
import Header from "./Layout/Header";
import AuthContext from "./Store/auth-context";
import { useState, useCallback, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainWrapper from "./Layout/MainWrapper";
import AnimeItem from "./Components/Anime/AnimeItem";


function App() {
  const authContextData = useContext(AuthContext);

  const [animeList, setAnimeList] = useState([
    {
        "id": 6589,
        "imageURI": "https://media.kitsu.io/anime/poster_images/6589/tiny.jpg",
        "name": "Sword Art Online",
        "status": "finished",
        "ageRating": "PG",
        "episodeCount": 25,
        "averageRating": 73.42,
        "startingDate": "2012-07-08",
        "slug": "sword-art-online"
    },
    {
        "id": 41024,
        "imageURI": "https://media.kitsu.io/anime/poster_images/41024/tiny.jpg",
        "name": "That Time I Got Reincarnated as a Slime",
        "status": "finished",
        "ageRating": "PG",
        "episodeCount": 24,
        "averageRating": 82.11,
        "startingDate": "2018-10-02",
        "slug": "tensei-shitara-slime-datta-ken"
    },
    {
        "id": 44297,
        "imageURI": "https://media.kitsu.io/anime/poster_images/44297/tiny.jpg",
        "name": "Tsukimichi -Moonlit Fantasy-",
        "status": "finished",
        "ageRating": "PG",
        "episodeCount": 12,
        "averageRating": 78.41,
        "startingDate": "2021-07-07",
        "slug": "tsuki-ga-michibiku-isekai-douchuu"
    },
    {
        "id": 44393,
        "imageURI": "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        "name": "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
        "status": "finished",
        "ageRating": "PG",
        "episodeCount": 12,
        "averageRating": 77.09,
        "startingDate": "2021-10-06",
        "slug": "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru"
    }
]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);


  const fetchAnimeHandler = useCallback(async () => {

    //use Data result from user service call when implemented else latest state issue will occur
    const userAnimeList = [6589, 41024, 44297, 44393];

    // setIsLoading(true);
    // setError(null);

    try {
      const userAnimeListData = [];

      for (const anime of userAnimeList) {
        const response = await fetch(`http://localhost:9092/anime/${anime}`);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const animeData = await response.json();

        userAnimeListData.push({
          id: animeData.animeId,
          imageURI: animeData.posterImage.tiny,
          name: animeData.animeName,
          status: animeData.status,
          ageRating: animeData.ageRating,
          episodeCount: animeData.episodeCount,
          averageRating: animeData.rating,
          startingDate: animeData.startingDate,
          slug:animeData.slug
        });
        console.info(userAnimeListData);
        setAnimeList(userAnimeListData);
      }
    } catch (error) {
      // setError(error.message);
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    // fetchAnimeHandler();
  }, [fetchAnimeHandler]);

  let content = <p>No Anime Found</p>;

  if (animeList.length > 0)
    content = <AnimeGrid userAnimeListData={animeList} userName="Jayesh" />;

  return (
    <MainWrapper>
      <Header />
      <Switch>
        <Route path="/login">{!authContextData.isLoggedIn && <Login />}</Route>
        <Route path="/list">
          <Fragment>
            {authContextData.isLoggedIn && <ListSummary userName="Jayesh" />}
            {/* {authContextData.isLoggedIn && <AnimeList userName = "Jayesh"/>} */}
            {authContextData.isLoggedIn && content}
          </Fragment>
        </Route>
        <Route path="/anime/:slug">
          <AnimeItem userAnimeList = {animeList} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </MainWrapper>
  );
}

export default App;
