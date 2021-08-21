import classes from './Delete.module.css';

import { ReactComponent as DelSvg } from "./delete.svg";

const Delete = (props) => {

  const deleteOnClickHandler = () =>{

  }

  return (
    <div className={classes.delete}>
      <DelSvg className={classes.hover} onClick={deleteOnClickHandler}/>
    </div>
  );
};

export default Delete;
