import { Fragment } from "react";
import AnimeList from "./Components/Anime/AnimeList";
import ListSummary from "./Components/ListSummary";
import Header from "./Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <ListSummary userName = "Jayesh"/>
      <AnimeList userName = "Jayesh"/>
    </Fragment>
  );
}

export default App;
