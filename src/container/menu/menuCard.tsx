export interface menuItemProps {
  name: string;
  time: string;
  rate: string;
  image: string;
  id: number;
  cartItems?: number[];
}

const MenuCard = ({
  name,
  time,
  rate,
  image,
  id,
  cartItems,
}: menuItemProps) => {
  return (
    <div className="mainCard">
      <div className="menuImage">
        <img src={image} className="menu_images" alt="menu items" />
      </div>
      <div className="menuItem">
        <div className="menuContent">
          <div className="row">
            <div className="menu_name">{name}</div>
            <div>{time}</div>
            <div className="col-7">{rate}</div>
            <div className="col-5">
              {cartItems?.filter((it) => it === id) ? (
                <button>{"------1-----"}</button>
              ) : (
                <button
                  onClick={() => {
                    console.log(cartItems, "cart");
                    cartItems?.push(id);
                    console.log(cartItems, "cart");
                    return cartItems;
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
