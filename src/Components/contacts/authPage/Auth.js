import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInError } from "../../../redux/auth/authActions";
import {
  signInOperation,
  signUpOperation,
} from "../../../redux/auth/authOperation";
import { errorSelector } from "../../../redux/auth/authSelectors";

import AuthForm from "./authForm/AuthForm";
const Auth = () => {
  const dispatch = useDispatch();

  const error = useSelector(errorSelector);

  const resetError = () => error && dispatch(signInError(""));

  useEffect(() => {
    return () => {
      resetError();
    };
  });
  const signUp = (user) => dispatch(signUpOperation(user));
  const signIn = (user) => dispatch(signInOperation(user));
  return (
    <>
      <AuthForm signUp={signUp} signIn={signIn} error={error} />
    </>
  );
};

export default Auth;
