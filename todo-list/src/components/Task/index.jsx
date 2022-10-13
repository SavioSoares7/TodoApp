import { TaskContainer } from "./style";
import { AiFillDelete } from "react-icons/ai";

export function Task({ task }) {
  return (
    <TaskContainer>
      <label className={task.isCompleted ? "completed" : "not-Completed"}>
        <input type="checkbox" />

        <span key={task.id}>{task.task}</span>
      </label>
      <AiFillDelete size={20} />
    </TaskContainer>
  );
}
