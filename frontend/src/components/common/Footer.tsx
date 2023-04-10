import { FooterProps, MenuProps } from "../../props/common/footer";
import {
  menuBackgroundColor,
  menuBorder,
  menuHeight,
  menuTextColor,
  menuWidth,
} from "../../utils/common/footer";

function Footer(props: FooterProps) {
  return (
    <div className="absolute bottom-0 w-screen">
      <Menu text="Page1" setCurrentPage={props.setCurrentPage} />
      <Menu text="Page2" setCurrentPage={props.setCurrentPage} />
    </div>
  );
}

function Menu(props: MenuProps) {
  function onClick() {
    props.setCurrentPage(props.text);
  }

  return (
    <button
      className={`${menuWidth} ${menuHeight} ${menuBorder} ${menuTextColor} ${menuBackgroundColor}`}
      onClick={onClick}
    >
      {props.text}
    </button>
  );
}

export default Footer;
