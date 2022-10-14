import { TaskContainer } from "./style";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

import { useAlert } from "react-alert";

export function Task({ task }) {
  const alert = useAlert();

  const [classModified, setClassModified] = useState("not-completed");
  const [taskDelete, setTaskDelete] = useState("");

  let newClass = () => {
    if (classModified == "not-completed") {
      setClassModified("completed");
      alert.success("Tarefa concuida");
    } else {
      setClassModified("not-completed");
      alert.error("Tarefa não realizada");
    }
  };

  let deleteTask = () => {
    setTaskDelete("delete");
  };

  return (
    <TaskContainer className={taskDelete}>
      <label className={classModified}>
        <input type="checkbox" onClick={newClass} />

        <span key={task.id}>{task.task}</span>
      </label>
      <AiFillDelete onClick={deleteTask} />
    </TaskContainer>
  );
}
