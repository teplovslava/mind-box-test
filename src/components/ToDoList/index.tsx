import { ITask } from "../../interfaces";
import ToDoItem from "../ToDoItem";
import style from "./style.module.scss";
import classNames from "classnames";

interface IProps {
  data: ITask[];
  onChange: (id: string) => void;
  activeFilter: string;
}

const isTaskVisible = (task: ITask, activeFilter: string) => {
  return !(
    (activeFilter === "complete" && !task.completed) ||
    (activeFilter === "uncomplete" && task.completed)
  );
};

export default function ToDoList({ data, onChange, activeFilter }: IProps) {
  return (
    <div className={style.list}>
      {data.map((task) => (
        <div
          key={task.id}
          className={classNames(style.item, {
            [style.item_hidden]: !isTaskVisible(task, activeFilter),
          })}
        >
          <ToDoItem task={task} onChange={onChange} />
        </div>
      ))}
    </div>
  );
}
