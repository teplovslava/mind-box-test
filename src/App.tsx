import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { data as fakeData } from "../fakeData";
import { useTasks } from "./hooks/useTasks";
import ToDoFilter, { filters } from "./components/ToDoFilter";
import ToDoCounts from "./components/ToDoCounts";
import { useState } from "react";

type FilterType = (typeof filters)[number]["type"];

export default function App() {
  const { data, addNewTask, changeComplete, handleDeleteTasks } = useTasks(fakeData);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  return (
    <div className="container">
      <ToDoInput onSubmit={addNewTask} placeholder="Введите новую задачу" />
      <div className="overlay">
        <ToDoCounts data={data} />
        <ToDoFilter onChange={setActiveFilter} onDelete={handleDeleteTasks} />
        <ToDoList data={data} onChange={changeComplete} activeFilter={activeFilter} />
      </div>
    </div>
  );
}
