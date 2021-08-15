import { Fragment, useContext } from "react";
import AnimeGrid from "./Components/Anime/AnimeGrid";
import AnimeList from "./Components/Anime/AnimeList";
import ListSummary from "./Components/ListSummary";
import Login from "./Components/Login/Login";
import Header from "./Layout/Header";
import AuthContext from "./Store/auth-context";

function App() {

  const authContextData = useContext(AuthContext);

  return (
    <Fragment>
      <Header />
      {! authContextData.isLoggedIn &&  <Login/>}
      {authContextData.isLoggedIn && <ListSummary userName = "Jayesh"/>}
      {/* {authContextData.isLoggedIn && <AnimeList userName = "Jayesh"/>} */}
      {authContextData.isLoggedIn && <AnimeGrid userName = "Jayesh"/>}
    </Fragment>
  );
}

export default App;
