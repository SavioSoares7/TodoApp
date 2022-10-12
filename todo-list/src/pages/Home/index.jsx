import { Container, ContainerInput } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { useAlert } from "react-alert";

export function Home() {
  const alert = useAlert();

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
    if (!task) {
      alert.error("Por favor preencha o campo para cadastrar uma nova tarefa");
      return;
    }
    tasks.push(task);

    console.log(tasks);
  };

  const changeTask = ({ target }) => {
    let task = {
      id: target.value,
      task: target.value,
      isCompleted: false,
    };

    setTask(task);
  };

  return (
    <Container>
      <h1>Todo List</h1>

      <ContainerInput>
        <Input changeTask={changeTask} title="Cadastrar tarefa " />
        <Button handleTask={handleTask} Children={<AiOutlinePlus />}></Button>
      </ContainerInput>
    </Container>
  );
}
