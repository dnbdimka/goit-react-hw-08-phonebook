import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({
  name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className="nav-item">
          <NavLink
            to={path}
            exact={exact}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            {name}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li className="nav-item">
          <NavLink
            to={path}
            exact={exact}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            {name}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className="nav-item">
          <NavLink
            to={path}
            exact={exact}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
