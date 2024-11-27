import { Link } from "react-router";
import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";
const Nav = () => {
  return (
    <nav className={style.container}>
      <Link to="/beans">Beans</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/combinations">Combinations</Link>
      <Link to="/history">History</Link>
      <SwitchTheme />
    </nav>
  );
};

export default Nav;
