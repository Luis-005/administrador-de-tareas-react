import { useContext } from "react";
import "./FilterTasks.css";
import { TasksContext } from "../Context/Context";

export const FilterTasks = () => {
  const { tasks, setFilteredTasks } = useContext(TasksContext);

  const filterTasks = (filterType) => {
    switch (filterType) {
      case "finished":
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      case "unfinished":
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(tasks);
    }
  };

  return (
    <>
      <section className="container-Tasks">
        <details>
          <summary>Tasks</summary>
          <ul>
            <li>
              <button onClick={() => filterTasks("finished")}>
                Finished Tasks
              </button>
            </li>
            <li>
              <button onClick={() => filterTasks("unfinished")}>
                Unfinished Tasks
              </button>
            </li>
            <li>
              <button onClick={() => filterTasks("all")}>All Tasks</button>
            </li>
          </ul>
        </details>
      </section>
    </>
  );
};
