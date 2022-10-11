import styled from "styled-components";

export const Button = styled.button`
  background: rgb(64, 230, 103);
  background: radial-gradient(
    circle,
    rgba(64, 230, 103, 1) 0%,
    rgba(0, 255, 166, 1) 99%
  );

  padding: 20px;
  border-radius: 10px;

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
