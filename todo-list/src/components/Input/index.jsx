import { InputContainer } from "./style";

export function Input({ changeTask, title }) {
  return (
    <InputContainer
      onChange={(e) => {
        changeTask(e);
      }}
      placeholder={title}
    />
  );
}
