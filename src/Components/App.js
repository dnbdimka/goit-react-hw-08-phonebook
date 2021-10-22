import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderSelector } from "../redux/auth/authSelectors";
import Header from "./header/Header";
import Main from "./main/Main";
import { getCurrentUserOperation } from "../redux/auth/authOperation";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserOperation());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
