import Card from "../../UI/Card";
import classes from "./AnimeList.module.css";

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
    id: 46471,
  },
];

const AnimeList = () => {
  return (
    <section className={classes.animeList}>
      <Card>
        <ul>
          {DUMMY_DATA.map((element) => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AnimeList;
