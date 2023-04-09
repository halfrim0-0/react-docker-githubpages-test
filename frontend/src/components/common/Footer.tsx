import { MenuProps } from "../../props/common/footer";
import {
  menuBackgroundColor,
  menuBorder,
  menuHeight,
  menuTextColor,
  menuWidth,
} from "../../utils/common/footer";

function Footer() {
  return (
    <div className="absolute bottom-0 w-screen">
      <Menu text="Page1" />
      <Menu text="Page2" />
    </div>
  );
}

function Menu(props: MenuProps) {
  return (
    <button
      className={`${menuWidth} ${menuHeight} ${menuBorder} ${menuTextColor} ${menuBackgroundColor}`}
    >
      {props.text}
    </button>
  );
}

export default Footer;
