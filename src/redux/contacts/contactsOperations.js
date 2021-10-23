import axios from "axios";
import {
  getContactsRequest,
  addNewContactSucces,
  addNewContactRequest,
  getContactsSucces,
  addNewContactError,
  getContactsError,
  removeContactByIdRequest,
  removeContactByIdSucces,
  removeContactByIdError,
} from "./contactsActions";

const BASE_URL = "https://connections-api.herokuapp.com";

const getContactsOperation = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSucces(contacts));
      return;
    }
    dispatch(getContactsSucces());
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

const addContactOperation = (newContact) => async (dispatch) => {
  dispatch(addNewContactRequest());
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, newContact);
    dispatch(addNewContactSucces({ ...newContact, id: response.data.id }));
  } catch (error) {
    dispatch(addNewContactError(error.message));
  }
};

const removeContactOperation = (id) => async (dispatch) => {
  dispatch(removeContactByIdRequest());
  try {
    await axios.delete(`${BASE_URL}/contacts/${id}`);
    dispatch(removeContactByIdSucces(id));
  } catch (error) {
    dispatch(removeContactByIdError(error.message));
  }
};

export { addContactOperation, getContactsOperation, removeContactOperation };
