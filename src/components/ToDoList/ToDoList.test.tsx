// ToDoList.test.tsx
import { render, screen } from "@testing-library/react";
import ToDoList from ".";
import { ITask } from "../../interfaces";

describe("ToDoList", () => {
  const tasks: ITask[] = [
    { id: "1", title: "Задача 1", completed: false },
    { id: "2", title: "Задача 2", completed: true },
  ];
  const onChangeMock = jest.fn();

  it('hides completed tasks when filter is "uncomplete"', () => {
    render(
      <ToDoList
        data={tasks}
        onChange={onChangeMock}
        activeFilter="uncomplete"
      />
    );

    expect(screen.getByText("Задача 1")).toBeVisible();

    const task2Wrapper = screen.getByText("Задача 2").closest(".item");
    expect(task2Wrapper).toHaveClass("item_hidden");
  });

  it('hides uncompleted tasks when filter is "complete"', () => {
    render(
      <ToDoList data={tasks} onChange={onChangeMock} activeFilter="complete" />
    );

    const task1Wrapper = screen.getByText("Задача 1").closest(".item");
    expect(task1Wrapper).toHaveClass("item_hidden");

    expect(screen.getByText("Задача 2")).toBeVisible();
  });
});
