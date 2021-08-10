import { useContext, useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./Login.module.css";
import AuthContext from "../../Store/auth-context";

const Login = (props) => {

    const authContextData = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }


    const submitHandler = (event) =>{

        console.info("Inside submit Handler");
        event.preventDefault();
        authContextData.onLogin(userName,password);

    }

  return (
    <div className={classes.loginForm}>
      <form onSubmit={submitHandler}>
        <Input type="text" label="User Name" value = {userName} onChange = {userNameChangeHandler} />
        <Input type="password" label="Password" value = {password} onChange ={passwordChangeHandler}/>
        <Button content="Login" />
      </form>
    </div>
  );
};

export default Login;
