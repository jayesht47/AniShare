import classes from "./Header.module.css";
import Button from "../UI/Button";
import AuthContext from "../Store/auth-context";
import { useContext } from "react";

const Header = () => {

  const authContextData = useContext(AuthContext);

  return (
    <div className={classes.header}>
      <h1 >AniShare</h1>
      <div className = {classes.menu}>
        {authContextData.isLoggedIn && <Button content = "Create" />}
        {authContextData.isLoggedIn && <Button content = "Share" />}
        {authContextData.isLoggedIn && <Button content = "Logout" onClick = {authContextData.onLogout} />}
      </div>
    </div>
  );
};

export default Header;
