import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSucces,
  getContactsError,
  addNewContactRequest,
  addNewContactSucces,
  addNewContactError,
  filteredContacts,
  removeContactByIdSucces,
  removeContactByIdRequest,
  removeContactByIdError,
  resetContactsSucces,
} from "./contactsActions";

// [getContactsRequest]: (state, action) => null,

const contactsListReducer = createReducer([], {
  [getContactsSucces]: (_, action) => action.payload,
  [addNewContactSucces]: (state, { payload }) => [...state, payload],
  [removeContactByIdSucces]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),

  [resetContactsSucces]: (_, action) => action.payload,
});

const contactsFilterReducer = createReducer("", {
  [filteredContacts]: (_, { payload }) => payload,
  [resetContactsSucces]: () => "",
});

const contactsLoaderReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSucces]: () => false,
  [getContactsError]: () => false,
  [addNewContactRequest]: () => true,
  [addNewContactSucces]: () => false,
  [addNewContactError]: () => false,
  [removeContactByIdRequest]: () => true,
  [removeContactByIdSucces]: () => false,
  [removeContactByIdError]: () => false,
});

const contactsErrorReducer = createReducer("", {
  [getContactsError]: (_, action) => action.payload,
  [addNewContactError]: (_, action) => action.payload,
  [removeContactByIdError]: (_, action) => action.payload,
  [getContactsSucces]: () => "",
  [addNewContactSucces]: () => "",
  [removeContactByIdSucces]: () => "",
  [resetContactsSucces]: () => "",
});

export const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactsFilterReducer,
  isLoading: contactsLoaderReducer,
  error: contactsErrorReducer,
});
