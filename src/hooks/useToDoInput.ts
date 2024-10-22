import { useState } from "react";

export const useToDoInput = (onSubmit: (value: string) => void) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.length) {
      setError("Название задачи должно состоять минимум из 1 символа");
      return;
    }

    setError(null);
    onSubmit(value);
    setValue("");
  };

  return {
    value,
    error,
    handleChange,
    handleSubmit,
  };
};
