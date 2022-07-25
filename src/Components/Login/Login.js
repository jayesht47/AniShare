import { useContext, useState } from "react";
import Input from "../../UI/Input";
import AuthContext from "../../Store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const authContextData = useContext(AuthContext);

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    console.info("Inside submit Handler");
    event.preventDefault();
    authContextData.onLogin(userName, password);
    navigate("/list");
  };

  return (
    <div className="flex flex-col items-center xs:h-3/5">
      <form
        onSubmit={submitHandler}
        className="m-auto w-1/5 lg:w-1/5 sm:w-3/5 xs:w-3/5 flex  flex-col"
      >
        <Input
          type="text"
          label="User Name"
          value={userName}
          onChange={userNameChangeHandler}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={passwordChangeHandler}
        />
        <button className="bg-cyan-600 rounded px-3 py-2 mt-3 m-auto w-1/3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
