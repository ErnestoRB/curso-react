import { Icon } from "./Icon";
import "./NavItem.css";

export function NavItem(props) {
  return (
    <div className="Nav-Item">
      <Icon icono={props.icono}></Icon>
      {props.nombre}
    </div>
  );
}
