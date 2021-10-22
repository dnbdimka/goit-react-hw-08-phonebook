import React from "react";
import Loader from "react-loader-spinner";

const ContactListItem = ({ contact, onRemoveContactById, isLoading }) => {
  const remove = () => {
    onRemoveContactById(contact.id);
  };
  return (
    <li>
      <p>
        {contact.name}: <span>{contact.number}</span>
      </p>
      {isLoading ? (
        <Loader type="Oval" color="#00b0b9" height={20} width={20} />
      ) : (
        <button onClick={remove}>DELETE</button>
      )}
    </li>
  );
};

export default ContactListItem;
