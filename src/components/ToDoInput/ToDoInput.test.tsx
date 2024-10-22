import { render, screen, fireEvent } from "@testing-library/react";
import ToDoInput from "./index";

describe("ToDoInput", () => {
  it("renders input and button", () => {
    render(<ToDoInput onSubmit={() => {}} placeholder="Введите задачу" />);
    expect(screen.getByPlaceholderText(/введите задачу/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /добавить/i })
    ).toBeInTheDocument();
  });

  it("submits the input value", () => {
    const mockOnSubmit = jest.fn();
    render(<ToDoInput onSubmit={mockOnSubmit} placeholder="Введите задачу" />);

    const inputElement = screen.getByPlaceholderText(/введите задачу/i);
    fireEvent.change(inputElement, { target: { value: "Новая задача" } });

    const buttonElement = screen.getByRole("button", { name: /добавить/i });
    fireEvent.click(buttonElement);

    expect(mockOnSubmit).toHaveBeenCalledWith("Новая задача");
  });
});
