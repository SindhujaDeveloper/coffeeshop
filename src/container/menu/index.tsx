import MenuCard from "./menuCard";
import "../../assets/css/menu.css";
import blackCoffee from "../../assets/images/blackcoffee.png";
import expresso from "../../assets/images/expressoCoffee.png";
import cappuccino from "../../assets/images/cappuccino.png";

export default function MenuList() {
  return (
    <div className="main-menulist" id="menu">
      <div className="menu-title welcome_title">Menu</div>
      <div>
        <div className="row">
          <div className="col">
            <MenuCard
              name={"Black Coffee"}
              time={"10mins away"}
              rate={"Rs.20"}
              image={blackCoffee}
              id={1}
            />
          </div>
          <div className="col">
            <MenuCard
              name={"Expresso"}
              time={"2mins away"}
              rate={"Rs.50"}
              image={expresso}
              id={2}
            />
          </div>
          <div className="col">
            <MenuCard
              name={"Cappuccino"}
              time={"23mins away"}
              rate={"Rs.80"}
              image={cappuccino}
              id={0}
            />
          </div>
        </div>
        <div style={{ paddingTop: "50px" }}></div>
        <div className="row">
          <div className="col">
            <MenuCard
              name={"Black Coffee"}
              time={"10mins away"}
              rate={"Rs.20"}
              image={blackCoffee}
              id={1}
            />
          </div>
          <div className="col">
            <MenuCard
              name={"Expresso"}
              time={"2mins away"}
              rate={"Rs.50"}
              image={expresso}
              id={2}
            />
          </div>
          <div className="col">
            <MenuCard
              name={"Cappuccino"}
              time={"23mins away"}
              rate={"Rs.80"}
              image={cappuccino}
              id={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
