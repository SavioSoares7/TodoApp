import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  width: 80%;

  display: flex;
  justify-content: space-around;
  gap: 40px;
`;

export const TaskCompleted = styled.div`
  background-color: #ccc;

  flex: 1;

  text-align: center;

  padding-top: 20px;
`;
export const TaskNotCompleted = styled.div`
  background-color: #ccc;

  flex: 1;
  text-align: center;

  padding-top: 20px;
`;
