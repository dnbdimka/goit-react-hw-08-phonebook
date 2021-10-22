import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/auth/authSelectors";
import Navigation from "../navigation/Navigation";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  const user = useSelector(userSelector);
  return (
    <HeaderStyled>
      <h2 className="header-logo">LOGO</h2>
      {user?.userName && (
        <div className="header-info">
          <p>Welcome, {user.userName}</p>
          <span>{user.email}</span>
        </div>
      )}
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
