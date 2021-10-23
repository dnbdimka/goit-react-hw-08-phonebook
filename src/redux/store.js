import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsReducer";
import { authReducer } from "./auth/authRedusers";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import reduxReset from "redux-reset";

const authConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

const appReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(authConfig, authReducer),
});

const rootReducer = (state, action) => {
  // if (action.type === "auth/signOutSuccess") {
  //   state.contacts.items = [];
  // }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
