import { useContext, useEffect, useState } from "react";
import "./ItemTask.css";
import { TasksContext } from "../Context/Context";

export const ItemTask = ({ idTask, content, titleTask }) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [colorTask, setColorTask] = useState("");

  const task = tasks.find((task) => task.id === idTask);

  const handleCheckedTask = (e) => {
    const isChecked = e.target.checked;
    setTasks(
      tasks.map((task) =>
        task.id === idTask ? { ...task, completed: isChecked } : task
      )
    );
  };

  useEffect(() => {
    if (task?.completed) {
      setColorTask("green");
    } else {
      setColorTask("red");
    }
  }, [task]);

  return (
    <li className="boxitemsTask" id={idTask}>
      <div>
        <h2 style={{ color: colorTask }}>{titleTask}</h2>
        <p style={{ color: colorTask }}>{content}</p>
      </div>
      <div>
        <input
          type="checkbox"
          name="tasks-true?"
          checked={task?.completed || false}
          onChange={handleCheckedTask}
        />
      </div>
    </li>
  );
};
