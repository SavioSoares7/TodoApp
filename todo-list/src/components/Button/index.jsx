import { ButtonContainer } from "./style";

export function Button({ Children, handleTask }) {
  return <ButtonContainer onClick={handleTask}>{Children}</ButtonContainer>;
}
