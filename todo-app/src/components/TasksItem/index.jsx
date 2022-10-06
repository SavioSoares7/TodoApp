import { Container, TasksNoCompleted, TasksCompleted } from "./style";

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
      <h3>My Tasks</h3>

      <TasksNoCompleted>
        <h4>Not completed</h4>

        <div className="tasks-list">
          {tasks
            .filter((item) => item.isCompleted === false)
            .map((item) => (
              <p key={item.id}>{item.task}</p>
            ))}
        </div>
      </TasksNoCompleted>

      <TasksCompleted>
        <h4>Completed</h4>
        <div className="tasks-list">
          {tasks
            .filter((item) => item.isCompleted)
            .map((item) => (
              <p key={item.id}>{item.task}</p>
            ))}
        </div>
      </TasksCompleted>
    </Container>
  );
}
