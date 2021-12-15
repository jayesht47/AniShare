import classes from "./Button.module.css";

const Button = (props) => {
    
  return <button className = "bg-cyan-600 m-2 px-5 h-8 text-sm rounded" onClick = {props.onClick} >{props.content}</button>;
};

export default Button;
