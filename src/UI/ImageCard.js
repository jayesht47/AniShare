import classes from "./ImageCard.module.css";

const ImageCard = (props) =>{

    return(
        <div key = {props.animeData.slug} onClick={() => {props.onClick(props.animeData)}} className="m-3 ">
            <img src = {props.imageURI} alt = "Anime tiny " className="rounded-sm hover:cursor-pointer" />
            {/* <div className={classes.Rating}>99.99</div> */}
        </div>
    );

}

export default ImageCard;