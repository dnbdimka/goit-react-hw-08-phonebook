import styled from "styled-components";

export const FormStyled = styled.div`
  margin: 0 auto;
  width: 500px;
  .form-box {
    margin-top: 20px;
    width: 500px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.45);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .form-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;

    font-size: 40px;
    font-variant-caps: all-small-caps;
    background-color: #121e24;
    color: transparent;
    text-shadow: 1px 1px 2px #00b6c02e;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    filter: brightness(3);
  }

  .form-box .user-box {
    position: relative;
  }

  .form-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .form-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.216);
    pointer-events: none;
    transition: 0.5s;
  }

  .form-box .user-box input:focus ~ label,
  .form-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #00b0b9;
    font-size: 12px;
  }
  .error-msg {
    font-size: 10px;
    color: red;
  }
  .form-box .form-btn {
    display: flex;
    justify-content: center;
    height: 40px;
    width: 200px;

    margin-top: 40px;
  }
  .form-box form button {
    position: relative;
    display: inline-block;

    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
    border: 1px solid;
    border-radius: 5px;
    border-color: #00b0b9;
    width: 100%;
    height: 40px;
    background: transparent;
    font-weight: 700;

    color: #00b0b9;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;

    letter-spacing: 4px;
  }
  .form-box button:hover {
    background: #00b0b9;
    color: #fff;
    border-radius: 5px solid #00b0b9;
    box-shadow: 0 0 5px #00b0b9, 0 0 20px #00b0b9;
  }
`;
