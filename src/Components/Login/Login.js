import { useContext, useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./Login.module.css";
import AuthContext from "../../Store/auth-context";
import { useHistory } from "react-router";



const Login = (props) => {

    const authContextData = useContext(AuthContext);

    const history = useHistory();

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
        history.push("/list");
    }

  return (
    <div >
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <Input type="text" label="User Name" value = {userName} onChange = {userNameChangeHandler} />
        <Input type="password" label="Password" value = {password} onChange ={passwordChangeHandler}/>
        <Button content="Login" />
      </form>
    </div>
  );
};

export default Login;
