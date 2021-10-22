import styled from "styled-components";
export const NavStyled = styled.nav`
  .nav-list {
    list-style: none;
    display: flex;
  }
  .nav-item:not(:last-child) {
    margin-right: 30px;
  }

  .nav-link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 500;
    color: #b3b3b3;
    transition: 0.5s;
  }
  .nav-link:hover {
    color: #00b0b9;
  }
  .nav-link-active {
    color: #00b0b9;
    text-shadow: 0 0 5px #00b0b9;
    border-bottom: 2px solid #00b0b9;
  }
`;
