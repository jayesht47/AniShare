import classes from "./Button.module.css";

const Button = (props) => {
    
  return <button className = "" onClick = {props.onClick} >{props.content}</button>;
};

export default Button;
