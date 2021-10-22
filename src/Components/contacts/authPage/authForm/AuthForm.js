import React, { useState } from "react";
// import Loader from "react-loader-spinner";
import { useLocation } from "react-router";
import Form from "../../../form/Form";

const AuthForm = ({ signUp, signIn, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    name === "name" && setName(value);
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/register"
      ? signUp({ name, email, password })
      : signIn({ email, password });
  };

  return (
    <Form>
      <div className="form-box">
        <h2>{location.pathname === "/login" ? "Login" : "Register"}</h2>
        <form onSubmit={onHandleSubmit}>
          {location.pathname === "/register" && (
            <div className="user-box">
              <input
                id="userName"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={onHandleChange}
                value={name}
              />
              <label htmlFor="userName">Name</label>
            </div>
          )}

          <div className="user-box">
            <input
              className="form-control-material"
              id="userEmail"
              type="email"
              name="email"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={onHandleChange}
              value={email}
            />
            <label htmlFor="userEmail">Email</label>
          </div>
          <div className="user-box">
            <input
              className="form-control-material"
              id="userPasword"
              type="password"
              name="password"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={onHandleChange}
              value={password}
            />
            <label htmlFor="userPasword">Password</label>
          </div>
          {error && <p className="error-msg">Wrong email or password</p>}
          <div className="form-btn">
            <button type="submit">
              {location.pathname === "/login" ? "Login" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default AuthForm;
