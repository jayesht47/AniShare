import { Link, Outlet } from "react-router-dom";

const AnimeRectCard = (props) => {
  return (
    <>
      <div className="border">
        <div>{props.name}</div>
      </div>
      <Link to={`/list/${props.slug}`}>{props.name}</Link>
    </>
  );
};

export default AnimeRectCard;
