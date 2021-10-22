import React, { useState } from "react";
import Loader from "react-loader-spinner";
import Form from "../../form/Form";

const initialState = {
  name: JSON.parse(localStorage.getItem("name")) || "",
  number: JSON.parse(localStorage.getItem("number")) || "",
};

const ContactForm = ({ onAddNewContact, isLoading }) => {
  const [contact, setContact] = useState(initialState);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
    localStorage.setItem([name], JSON.stringify(value));
  };

  const handelSubmitForm = (e) => {
    e.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("number");
    onAddNewContact(contact);
    setContact({ ...initialState });
  };

  return (
    <Form>
      <div className="form-box">
        <h2>Phonebook</h2>
        <form onSubmit={handelSubmitForm}>
          <div className="user-box">
            <input
              id="contactName"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={onHandleChange}
              value={contact.name}
            />
            <label htmlFor="contactName">Name</label>
          </div>
          <div className="user-box">
            <input
              className="form-control-material"
              id="contactPhone"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={onHandleChange}
              value={contact.number}
            />
            <label htmlFor="contactPhone">Number</label>
          </div>
          <div className="form-btn">
            {isLoading ? (
              <Loader type="Oval" color="#00b0b9" height={40} width={40} />
            ) : (
              <button type="submit">Add contact</button>
            )}
          </div>
        </form>
      </div>
    </Form>
  );
};

export default ContactForm;
