import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { ContactsFilterAndListWrapper } from "./ContactsStyled";

import {
  addContactOperation,
  getContactsOperation,
  removeContactOperation,
} from "../../redux/contacts/contactsOperations";
import {
  contactsSelector,
  filteredContactsSelector,
  filterSelector,
  loaderSelector,
} from "../../redux/contacts/contactsSelectors";

const Contacts = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const isLoading = useSelector(loaderSelector);
  const filteredContacts = useSelector(filteredContactsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const onAddNewContact = (newContact) => {
    if (
      contacts.some((contact) =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContactOperation(newContact));
  };
  const onRemoveContactById = (id) => {
    dispatch(removeContactOperation(id));
  };

  return (
    <>
      <ContactForm onAddNewContact={onAddNewContact} isLoading={isLoading} />
      <ContactsFilterAndListWrapper>
        {contacts.length !== 0 ? (
          <>
            <Filter filter={filter} />
            <ContactList
              contacts={filteredContacts}
              filterValue={filter}
              isLoading={isLoading}
              onRemoveContactById={onRemoveContactById}
            />{" "}
          </>
        ) : (
          <p>You have no contacts yet ...</p>
        )}
      </ContactsFilterAndListWrapper>
    </>
  );
};

export default Contacts;
