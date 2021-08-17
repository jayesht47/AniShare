// import Card from "../UI/Card";
import classes from './ListSummary.module.css';

const ListSummary = (props) => {

  return (
    <section className = {classes.listSummary}>
        <p> {`Welcome to  ${props.userName}'s Anime List.`}</p>
    </section>
  );
};

export default ListSummary;
