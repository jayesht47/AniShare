import classes from "./Header.module.css";
import Button from "../UI/Button";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 >AniShare</h1>
      <div className = {classes.menu}>
        <Button content = "Create" />
        <Button content = "Share" />
        <Button content = "Logout" />
      </div>
    </div>
  );
};

export default Header;
