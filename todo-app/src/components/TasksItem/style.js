import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;

  padding: 30px 180px;

  display: flex;
  flex-direction: column;

  > h3 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 10px;
  }
`;
export const TasksNoCompleted = styled.div`
  flex: 1;
  > h4 {
    font-size: 20px;
    text-transform: capitalize;
  }
  > .tasks-list {
    margin-top: 20px;
  }
`;
export const TasksCompleted = styled.div`
  flex: 1;
  > h4 {
    font-size: 20px;
    text-transform: capitalize;
  }
  > .tasks-list {
    margin-top: 20px;
  }
`;
