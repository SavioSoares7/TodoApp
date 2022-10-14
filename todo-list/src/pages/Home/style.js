import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 40px;
    font-size: 40px;
    cursor: default;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  width: 35%;
`;
