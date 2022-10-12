import { Container, TaskCompleted, TaskNotCompleted } from "./style";

export function ContainerTask({ tasks }) {
  console.log(tasks);
  return (
    <Container>
      {
        tasks.length > 0 ? 
        tasks.map((item) => {
          return <h1>{item.id}</h1>
        })

        :

        <h1>Tarefas vazias!</h1>
      }
    </Container>
  );
}
