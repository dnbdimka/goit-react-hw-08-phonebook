import styled from "styled-components";

export const ContactsListStyle = styled.div`
  h2 {
    margin: 10px 0 20px;
    padding: 0;
    /* color: #fff; */
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

  .contacts-list {
    padding: 0;
    margin: 0;
  }
  li {
    color: #c9c9c9;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #03e8f41d;
    }
  }

  button {
    margin-left: 20px;
    height: 25px;
    background: transparent;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 7px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    text-decoration: none;
    /* text-transform: uppercase; */
    overflow: hidden;
    transition: 0.5s;
    /* margin-top: 40px; */
    letter-spacing: 4px;
    border-radius: 5px;
    border-color: rgba(244, 3, 3, 0.2);
  }

  button:hover {
    background: rgba(244, 3, 3, 0.5);
    color: #fff;
    border-radius: 5px solid rgba(244, 3, 3, 0.5);
    box-shadow: 0 0 5px rgba(244, 3, 3, 0.5), 0 0 20px rgba(244, 3, 3, 0.5);
  }
  span {
    color: #979797;
  }

  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in-out;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  }
`;
