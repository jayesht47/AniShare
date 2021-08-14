import { useEffect, useState } from "react";
import classes from "./SmartText.module.css";

const SmartText = (props) => {
  const [readMore, setReadMore] = useState(false);

  const contentArr = props.content.split(/\r\n|\r|\n/);
  const numberOfLines = window.screen.width < 720 ? 4 : 6;
  let span1Content = "";
  let span2Content = "";

  for (let i = 0; i < contentArr.length; i++) {
    if (i < numberOfLines) span1Content += " " + contentArr[i];
    else span2Content += " " + contentArr[i];
  }

  useEffect(() => {
    if (contentArr.length > 5) setReadMore(true);
  }, [contentArr.length]);

  const readMoreClickHandler = () => {
    setReadMore(false);
  };

  const readLessClickHandler = () => {
    setReadMore(true);
  };

  return (
    <div className={classes.smartText}>
      <span>{span1Content}</span>
      <br />
      {readMore && (
        <button className={classes.readMore} onClick={readMoreClickHandler}>
          {" "}
          ... show more
        </button>
      )}
      {!readMore && <span>{span2Content}</span>}
      {!readMore && (
        <button className={classes.readMore} onClick={readLessClickHandler}>
          show less
        </button>
      )}
    </div>
  );
};

export default SmartText;
