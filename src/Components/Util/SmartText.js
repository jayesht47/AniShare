
import { useEffect, useState } from "react";
import classes from "./SmartText.module.css";

const SmartText = (props) =>{

    const[readMore,setReadMore] = useState(true);

    useEffect( () => {
        if(props.content.split(/\r\n|\r|\n/).length  > 7 ) setReadMore(true);
    },[props.content]);


    return(
        <div className={classes.smartText}>{props.content}</div>
    );

}

export default SmartText;