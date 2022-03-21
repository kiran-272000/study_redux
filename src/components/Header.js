import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const isLoggedin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
