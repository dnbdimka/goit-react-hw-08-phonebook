import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  signInError,
  signInRequest,
  signInSuccess,
  signOutError,
  signOutRequest,
  signOutSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

const authUserReducer = createReducer(null, {
  [signUpSuccess]: (_, action) => ({
    userName: action.payload.user.name,
    email: action.payload.user.email,
  }),
  [signInSuccess]: (_, action) => ({
    userName: action.payload.user.name,
    email: action.payload.user.email,
  }),
  [signOutSuccess]: () => null,

  [getCurrentUserSuccess]: (_, action) => ({
    userName: action?.payload?.user.name,
    email: action?.payload?.user.email,
  }),
});

const authTokensReducer = createReducer(null, {
  [signUpSuccess]: (_, action) => action.payload.token,

  [signInSuccess]: (_, action) => action.payload.token,

  [signOutSuccess]: () => null,
});

const authLoaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const authErrorReducer = createReducer("", {
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
  [signOutError]: (_, action) => action.payload,
  [getCurrentUserError]: (_, action) => action.payload,
  [signUpSuccess]: () => "",
  [signOutSuccess]: () => "",
  [signInSuccess]: () => "",
  [getCurrentUserSuccess]: () => "",
});

export const authReducer = combineReducers({
  user: authUserReducer,
  token: authTokensReducer,
  isLoading: authLoaderReducer,
  error: authErrorReducer,
});
