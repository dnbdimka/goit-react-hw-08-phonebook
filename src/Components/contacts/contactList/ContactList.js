import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "./animation.module.css";

import { ContactsListStyle } from "./ContactListStyled";

const ContactList = ({ contacts, onRemoveContactById, isLoading }) => {
  return (
    <>
      <ContactsListStyle>
        <h2>Contacts:</h2>

        <>
          {contacts.length !== 0 ? (
            <TransitionGroup component="ul" className="contacts-list">
              {contacts.map((contact) => (
                <CSSTransition
                  key={contact.id}
                  timeout={300}
                  classNames={popTransition}
                >
                  <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onRemoveContactById={onRemoveContactById}
                    isLoading={isLoading}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : (
            <p>There is no such contact ;(</p>
          )}
        </>
      </ContactsListStyle>
    </>
  );
};

export default ContactList;
