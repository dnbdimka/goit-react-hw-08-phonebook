import styled from "styled-components";

export const HeaderStyled = styled.header`
  min-width: 100%;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  .header-logo {
    color: #00b0b9;
    font-size: 30px;
  }
  .header-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;

    border: 2px solid #353535;
  }
  .header-info p {
    color: #d3d3d3;
    font-weight: 500;
    font-size: 16px;
  }
  .header-info span {
    color: #b3b3b3;
    font-weight: 400;
    font-size: 14px;
  }
`;
