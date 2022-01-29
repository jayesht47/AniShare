import classes from "./Button.module.css";

const Button = (props) => {
    
  return <button className = "bg-cyan-600 m-2 px-10 h-12 text-sm rounded-md text-2xl" onClick = {props.onClick} >{props.content}</button>;
};

export default Button;
