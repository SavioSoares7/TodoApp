import { Container, TasksNoCompleted, TasksCompleted } from "./style";

import { Task } from "../Task";
import { ContainerTask } from "../ContainerTask";

export function TasksItem() {
  const tasks = [
    {
      id: 0,
      task: "Limpar a casa",
      isCompleted: false,
    },
    {
      id: 1,
      task: "Estudar",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Viajar",
      isCompleted: true,
    },
  ];

  return (
    <Container>
      <ContainerTask />
      <h3>My Tasks</h3>

      <TasksNoCompleted>
        <h4>Not completed</h4>

        <div className="tasks-list">
          {tasks
            .filter((item) => item.isCompleted === false)
            .map((item) => (
              <Task task={item} key={item.id} />
            ))}
        </div>
      </TasksNoCompleted>

      <TasksCompleted>
        <h4>Completed</h4>
        <div className="tasks-list">
          {tasks
            .filter((item) => item.isCompleted)
            .map((item) => (
              <Task task={item} key={item.id} />
            ))}
        </div>
      </TasksCompleted>
    </Container>
  );
}
