import styled from "styled-components";

export const TaskContainer = styled.div`
  background: #fff;
  display: flex;
  flex-wrap: wrap;

  padding: 20px;
  border-radius: 20px;

  gap: 20px;

  margin: 0 auto;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  > label {
    display: flex;
    align-items: center;

    font-size: 20px;

    flex-wrap: wrap;
    gap: 20px;

    input {
      height: 20px;
      width: 20px;
    }
  }

  > svg {
    cursor: pointer;
  }

  &:first-child {
    display: none;
  }
`;
