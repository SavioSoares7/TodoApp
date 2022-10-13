import { Container } from "./style";
import { Task } from "../Task";

export function ContainerTask({ tasks }) {
  return (
    <Container>
      {tasks.length > 1 ? (
        tasks.map((item) => {
          return <Task task={item} key={item.id} />;
        })
      ) : (
        <h1>Tarefas vázias</h1>
      )}
    </Container>
  );
}
