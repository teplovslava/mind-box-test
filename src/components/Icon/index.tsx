import Icons from "../../assets/icons/sprite.svg";

interface IProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  width: number;
  height?: number;
}

function Icon({ name, width, height = width, ...props }: IProps) {
  return (
    <svg {...props} width={width} height={height}>
      <use href={`${Icons}#icon__${name}`} />
    </svg>
  );
}

export default Icon;
