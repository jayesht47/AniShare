// import Card from "../../UI/Card";
import classes from "./AnimeGrid.module.css";
import AnimeGridItem from "./AnimeGridItem";

const DUMMY_DATA = [
  {
    name: "Sword Art Online",
    malRating: 6,
    malLink: "https://myanimelist.net/anime/11757",
    id: 11757,
  },
  {
    name: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    malRating: 8.52,
    malLink: "https://myanimelist.net/anime/41487/",
    id: 41487,
  },
  {
    name: "Tantei wa Mou, Shindeiru.",
    malRating: 7.52,
    malLink: "https://myanimelist.net/anime/46471/",
    id: 4471,
  },
  {
    name: "Tantei wa Mou, Shindeiru.",
    malRating: 7.52,
    malLink: "https://myanimelist.net/anime/46471/",
    id: 46471,
  },
  {
    name: "Tantei wa Mou, Shindeiru.",
    malRating: 7.52,
    malLink: "https://myanimelist.net/anime/46471/",
    id: 4641,
  },
];

const AnimeGrid = () => {
  return (
    <div className={classes.animeGrid}>
        {DUMMY_DATA.map((element) => {
          return (
            <AnimeGridItem
              key={element.id}
              name={element.name}
              malRating={element.malRating}
              malLink={element.malLink}
            />
          );
        })}
    </div>
  );
};

export default AnimeGrid;
