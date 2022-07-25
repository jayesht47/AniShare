import Button from "../UI/Button";
import AuthContext from "../Store/auth-context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const authContextData = useContext(AuthContext);

  const homeClickHandler = ()  =>{
    navigate("/list");
  }

  const logoutHandler = () => {
    authContextData.onLogout();
    navigate("/login");
  };

  return (
    <div className="text-white flex flex-row mb-10">
      <h1 className="text-5xl p-5 grow">
        {" "}
        <span className=" cursor-pointer" onClick={homeClickHandler}>AniShare</span>
      </h1>
      <div className="mt-2 flex lg:flex-row xs:flex-col">
        {authContextData.isLoggedIn && <Button content="Create" />}
        {authContextData.isLoggedIn && <Button content="Share" />}
        {authContextData.isLoggedIn && (
          <Button content="Logout" onClick={logoutHandler} />
        )}
      </div>
    </div>
  );
};

export default Header;
