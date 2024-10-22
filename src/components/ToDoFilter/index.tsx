import { useState, useCallback, useMemo } from "react";
import style from "./style.module.scss";
import classNames from "classnames";

interface Filter {
  type: "all" | "complete" | "uncomplete";
  title: string;
}

export const filters: Filter[] = [
  {
    type: "all",
    title: "Все",
  },
  {
    type: "complete",
    title: "Выполненные",
  },
  {
    type: "uncomplete",
    title: "Не выполненные",
  },
];

interface IProps {
  onChange: (filter: Filter["type"]) => void;
  onDelete: () => void;
}

export default function ToDoFilter({ onChange, onDelete }: IProps) {
  const [active, setActive] = useState<number>(0);

  const memoizedFilters = useMemo(() => filters, []);

  const changeFilter = useCallback(
    (type: Filter["type"], i: number) => {
      setActive(i);
      onChange(type);
    },
    [onChange]
  );

  return (
    <div className={style.underHeader}>
      <div className={style.filter}>
        {memoizedFilters.map((filter, i) => (
          <div
            key={filter.type}
            className={classNames(
              style.filter__item,
              active === i && style.filter__item_active
            )}
            onClick={() => changeFilter(filter.type, i)}
          >
            {filter.title}
          </div>
        ))}
      </div>
      <button className={style.deleteBtn} onClick={onDelete}>
        Удалить все выполненные
      </button>
    </div>
  );
}
