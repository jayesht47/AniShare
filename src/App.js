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
      id: 6589,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/6589/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/6589/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/6589/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/6589/large.jpg",
        orignal: "https://media.kitsu.io/anime/poster_images/6589/original.png",
      },
      name: "Sword Art Online",
      status: "finished",
      ageRating: "PG",
      episodeCount: 25,
      averageRating: 73.42,
      startingDate: "2012-07-08",
      animeDesc:
        'In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of "NerveGear" technology, players can control their avatars within the game using nothing but their own thoughts.\nKazuto Kirigaya, nicknamed "Kirito," is among the lucky few enthusiasts who get their hands on the first shipment of the game. He logs in to find himself, with ten-thousand others, in the scenic and elaborate world of Aincrad, one full of fantastic medieval weapons and gruesome monsters. However, in a cruel turn of events, the players soon realize they cannot log out; the game\'s creator has trapped them in his new world until they complete all one hundred levels of the game.\nIn order to escape Aincrad, Kirito will now have to interact and cooperate with his fellow players. Some are allies, while others are foes, like Asuna Yuuki, who commands the leading group attempting to escape from the ruthless game. To make matters worse, Sword Art Online is not all fun and games: if they die in Aincrad, they die in real life. Kirito must adapt to his new reality, fight for his survival, and hopefully break free from his virtual hell.\n[Written by MAL Rewrite]',
      slug: "sword-art-online",
    },
    {
      id: 41024,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/41024/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/41024/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/41024/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/41024/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/41024/original.jpg",
      },
      name: "That Time I Got Reincarnated as a Slime",
      status: "finished",
      ageRating: "PG",
      episodeCount: 24,
      averageRating: 82.11,
      startingDate: "2018-10-02",
      animeDesc:
        "Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.\n\n(Source: Crunchyroll)",
      slug: "tensei-shitara-slime-datta-ken",
    },
    {
      id: 44297,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44297/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44297/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44297/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44297/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44297/original.jpg",
      },
      name: "Tsukimichi -Moonlit Fantasy-",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 78.41,
      startingDate: "2021-07-07",
      animeDesc:
        'Makoto Misumi is an ordinary high school boy summoned to an alternate world as a brave warrior. Unfortunately, the goddess of the world said with disdain, "Your face is ugly," stripped him of his title, and banished him to the outermost fringes of the wilderness. While wandering the wilderness, Makoto encountered dragons, spiders, orcs, dwarves, and all sorts of other non-human species. Due to differences in the environment from his home world, Makoto now exhibits extraordinary powers in magic and combat. Thus, he survives on this world while dealing with various encounters. The curtain rises on the alternate-world social reform fantasy of a boy forsaken by gods and humans.\n\n(Source: ANN)',
      slug: "tsuki-ga-michibiku-isekai-douchuu",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
    {
      id: 44393,
      posterImage: {
        tiny: "https://media.kitsu.io/anime/poster_images/44393/tiny.jpg",
        small: "https://media.kitsu.io/anime/poster_images/44393/small.jpg",
        medium: "https://media.kitsu.io/anime/poster_images/44393/medium.jpg",
        large: "https://media.kitsu.io/anime/poster_images/44393/large.jpg",
        orignal:
          "https://media.kitsu.io/anime/poster_images/44393/original.jpg",
      },
      name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
      status: "finished",
      ageRating: "PG",
      episodeCount: 12,
      averageRating: 77.09,
      startingDate: "2021-10-06",
      animeDesc:
        "\"I'm going to live for myself!\"\n\nThe greatest assassin on Earth knew only how to live as a tool for his employers—until they stopped letting him live. Reborn by the grace of a goddess into a world of swords and sorcery, he's offered a chance to do things differently this time around, but there's a catch...He has to eliminate a super-powerful hero who will bring about the end of the world unless he is stopped.\n\nNow known as Lugh Tuatha Dé, the master assassin certainly has his hands full, particularly because of all the beautiful girls who constantly surround him. Lugh may have been an incomparable killer, but how will he fare against foes with powerful magic?\n\n(Source: Yen Press)",
      slug: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    },
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
          posterImage: animeData.posterImage,
          name: animeData.animeName,
          status: animeData.status,
          ageRating: animeData.ageRating,
          episodeCount: animeData.episodeCount,
          averageRating: animeData.rating,
          startingDate: animeData.startingDate,
          animeDesc: animeData.animeDesc,
          slug: animeData.slug,
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
    // <MainWrapper>
    <Fragment>
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
          <AnimeItem userAnimeList={animeList} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Fragment>
    // </MainWrapper>
  );
}

export default App;
