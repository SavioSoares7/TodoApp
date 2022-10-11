import { Container } from "./style";

export function Input({ title, addTask, value, ...rest }) {
  return (
    <Container>
      <input placeholder={title} {...rest} onChange={(e) => addTask(e)} />
    </Container>
  );
}
