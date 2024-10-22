import { useToDoInput } from "../../hooks/useToDoInput";
import style from "./style.module.scss";

interface IProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

export default function ToDoInput({ onSubmit, placeholder }: IProps) {
  const { value, error, handleChange, handleSubmit } = useToDoInput(onSubmit);

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          placeholder={placeholder}
          className={style.form__input}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button className={style.form__button} type="submit">
          Добавить
        </button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </>
  );
}
