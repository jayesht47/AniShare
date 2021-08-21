import classes from './Delete.module.css';
import { useContext } from 'react';
import { ReactComponent as DelSvg } from "./delete.svg";
import AnimeListContext from '../Store/anime-list';

const Delete = (props) => {

  const AnimeListContextData = useContext(AnimeListContext);


  const deleteOnClickHandler = () =>{

    

  }

  return (
    <div className={classes.delete}>
      <DelSvg className={classes.hover} onClick={deleteOnClickHandler}/>
    </div>
  );
};

export default Delete;
