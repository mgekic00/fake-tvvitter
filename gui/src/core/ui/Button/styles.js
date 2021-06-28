import styled from "styled-components";

const Styled = {
  Button: styled.button`
    font-size: 16px;
    padding: 11px 12px;
    background-color: #074ee8;
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;

    &:disabled {
      background-color: grey;
    }
  `,
};

export default Styled;
