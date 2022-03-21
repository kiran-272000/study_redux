import { Fragment } from "react";
import Counter from "./components/Counter";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { authActions } from "./store/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isLoggedin && <Auth />}
      {isLoggedin && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
