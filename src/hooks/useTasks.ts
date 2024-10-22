import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../interfaces";

export const useTasks = (initialData: ITask[]) => {
  const [data, setData] = useState<ITask[]>(initialData);

  const addNewTask = useCallback((task: string) => {
    const newTask: ITask = {
      title: task,
      completed: false,
      id: uuidv4(),
    };
    setData((prev) => [newTask, ...prev]);
  }, []);

  const changeComplete = useCallback((id: string) => {
    setData((prev) => {
      const index = prev.findIndex((task) => task.id === id);
      if (index !== -1) {
        const newData = [...prev];
        newData[index] = {
          ...newData[index],
          completed: !newData[index].completed,
        };
        return newData;
      }
      return prev;
    });
  }, []);

  const handleDeleteTasks = useCallback(() => {
    setData((prev) => prev.filter((task) => !task.completed));
  }, []);

  return { data, addNewTask, changeComplete, handleDeleteTasks };
};
