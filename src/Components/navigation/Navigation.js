import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signOutSuccess } from "../../redux/auth/authActions";
import { signOutOperation } from "../../redux/auth/authOperation";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./navigationItem/NavigationItem";
import { NavStyled } from "./NavigationStyled";

const Navigation = ({ routes = mainRoutes }) => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutOperation());
  return (
    <NavStyled>
      <ul className="nav-list">
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}
        {isAuth && (
          <li className="nav-item" onClick={signOut}>
            <span className="nav-link">Sign Out</span>
          </li>
        )}
      </ul>
    </NavStyled>
  );
};

export default Navigation;
