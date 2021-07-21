import { Fragment } from "react";
import AnimeList from "./Components/Animes/AnimeList";
import ListSummary from "./Components/ListSummary";
import Header from "./Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <ListSummary userName = "Jayesh"/>
      <AnimeList />
    </Fragment>
  );
}

export default App;
