import styled from "styled-components";

export const Container = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-between;
`;

export const TaskTitle = styled.div`
  > label {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 10px;

    cursor: pointer;
  }
`;
export const TaskDelete = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > svg {
    fill: #222;
    cursor: pointer;
    font-size: 20px;
  }
`;
