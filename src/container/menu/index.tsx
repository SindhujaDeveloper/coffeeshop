import MenuCard from "./menuCard";
import "../../assets/css/menu.css";

export default function MenuList() {
  return (
    <div className="main-menulist">
      <div className="menu-title">Menu</div>
      <div className="row">
        <div className="col">
          <MenuCard />
        </div>
        <div className="col">
          <MenuCard />
        </div>
        <div className="col">
          <MenuCard />
        </div>
      </div>
    </div>
  );
}
