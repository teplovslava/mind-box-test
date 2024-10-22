import Icon from "../Icon";
import style from "./style.module.scss";

interface IProps {
  label?: React.ReactElement;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox = ({ label, checked, onChange }: IProps) => {
  return (
    <label className={style.customCheckbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={style.customCheckbox_input}
      />
      <div className={style.customCheckbox__checkmark}>
        <Icon width={40} name="done" />
      </div>
      {label && <span className={style.customCheckbox__label}>{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
