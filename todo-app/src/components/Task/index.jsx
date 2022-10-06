import { Container, TaskTitle, TaskDelete } from "./style";

import { MdDeleteOutline } from "react-icons/md";

export function Task({ task }) {
  return (
    <Container>
      <TaskTitle>
        <label
          className={
            task.isCompleted ? "tasks-completed" : "tasks-notCompleted"
          }
        >
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span>{task.task}</span>
        </label>
      </TaskTitle>

      <TaskDelete>
        <MdDeleteOutline />
      </TaskDelete>
    </Container>
  );
}
