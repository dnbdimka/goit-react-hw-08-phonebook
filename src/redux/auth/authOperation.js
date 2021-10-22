import axios from "axios";
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

const BASE_URL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());

  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, user);
    token.set(data.token);
    dispatch(signUpSuccess(data));
  } catch (error) {
    console.log(error.message);
    dispatch(signUpError(error.message));
  }
};

const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, user);
    token.set(data.token);
    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(signInError(error.message));
  }
};

const signOutOperation = () => async (dispatch, getState) => {
  dispatch(signOutRequest());
  try {
    await axios.post(`${BASE_URL}/users/logout`);
    token.unset();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutError(error.message));
  }
};

const getCurrentUserOperation = () => async (dispatch, getState) => {
  dispatch(getCurrentUserRequest());
  const persistedToken = getState().auth.token;

  if (persistedToken === null) {
    dispatch(getCurrentUserSuccess());
    return;
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get(`${BASE_URL}/users/current`);

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export {
  signUpOperation,
  signInOperation,
  signOutOperation,
  getCurrentUserOperation,
};
