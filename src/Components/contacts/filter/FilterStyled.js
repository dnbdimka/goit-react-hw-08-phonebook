import styled from "styled-components";

export const FilterStyled = styled.div`
  .filter-box {
    position: relative;
  }

  .filter-box input {
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
  .filter-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.216);
    pointer-events: none;
    transition: 0.5s;
  }
  .filter-box input:focus ~ label {
    top: -20px;
    left: 0;
    color: #00b0b9;
    font-size: 12px;
  }
`;
