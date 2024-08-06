import React, { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { Main } from "../../Layouts/Main/Main";
import { NewTask } from "../../NewTask/NewTask";
import { TasksContext } from "../../Context/Context";
import { ItemTask } from "../../ItemTask/ItemTask";
import { FilterTasks } from "../../FilterTasks/FilterTasks";

export const Home = () => {
  const { filteredTasks } = useContext(TasksContext);

  return (
    <>
      <Header>
        <h1>TASKS</h1>
      </Header>
      <Main>
        <NewTask />
        <FilterTasks />
        <ContainerTasks>
          {filteredTasks.map((task) => (
            <ItemTask
              idTask={task.id}
              key={task.id}
              titleTask={task.title}
              content={task.description}
            />
          ))}
        </ContainerTasks>
      </Main>
    </>
  );
};
