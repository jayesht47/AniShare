// import Card from "../UI/Card";
import classes from './ListSummary.module.css';

const ListSummary = (props) => {

  return (
    <section className = "mt-2 text-[#D1D1D0] flex text-3xl font-bold justify-center">
        <p> {`Welcome to  ${props.userName}'s Anime List.`}</p>
    </section>
  );
};

export default ListSummary;
