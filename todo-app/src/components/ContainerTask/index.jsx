import { useState } from "react";

import { Container } from "./style";

import { Input } from "../Input";
import { ButtonAdd } from "../ButtonAdd";

export function ContainerTask() {
  const [task, setTask] = useState("");

  const addTask = ({ target }) => {
    setTask(target.value);
  };

  return (
    <Container>
      <Input title="Enter your task..." value={task} addTask={addTask} />
      <ButtonAdd children="Add" />
    </Container>
  );
}
