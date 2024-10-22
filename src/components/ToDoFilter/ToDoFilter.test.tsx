// ToDoFilter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoFilter, { filters } from ".";

describe("ToDoFilter", () => {
  const onChangeMock = jest.fn();
  const onDeleteMock = jest.fn();

  beforeEach(() => {
    render(<ToDoFilter onChange={onChangeMock} onDelete={onDeleteMock} />);
  });

  it("renders filter options", () => {
    filters.forEach((filter) => {
      expect(screen.getByText(filter.title)).toBeInTheDocument();
    });
  });

  it("calls onChange when a filter is clicked", () => {
    fireEvent.click(screen.getByText("Выполненные"));
    expect(onChangeMock).toHaveBeenCalledWith("complete");
  });

  it("calls onDelete when delete button is clicked", () => {
    fireEvent.click(
      screen.getByRole("button", { name: /Удалить все выполненные/i })
    );
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
