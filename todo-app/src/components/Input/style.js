import styled from "styled-components";

export const Container = styled.div`
  margin: 25px 0 50px;

  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  > input {
    color: #fff;
    width: 50%;

    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid #fff;

    font-size: 20px;

    padding: 8px 5px;

    &::placeholder {
      color: #ccc;
    }
  }
`;
