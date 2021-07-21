import classes from './Card.module.css';




const Card = props =>{

    const cardClickHandler = () => {
        if(props.onClick === undefined) return;
        props.onClick();
    }

    return <div onClick={cardClickHandler} className ={classes.card}>
        {props.children}
    </div>

} 

export default Card;
