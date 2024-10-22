import classNames from "classnames";
import { ITask } from "../../interfaces";
import CustomCheckbox from "../CustomCheckbox";
import style from "./style.module.scss";
import { memo } from "react";

interface IProps {
  task: ITask;
  onChange: (id: string) => void;
}

export default memo(function ToDoItem({ task, onChange }: IProps) {
  const { title, completed, id } = task;

  return (
      <CustomCheckbox
        checked={completed}
        onChange={() => onChange(id)}
        label={
          <div
            className={classNames(style.item__title, {
              [style.item__title_completed]: completed,
            })}
          >
            {title}
          </div>
        }
      />
  );
})
