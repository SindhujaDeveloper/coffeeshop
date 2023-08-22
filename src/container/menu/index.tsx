import { menuItems } from "../../utils/helpers/container/menu";
import "../../assets/css/menu.css";
import { useDispatch } from "react-redux";
import { cartItemsListResponse } from "../../redux/actions/menu";
import { useSelector } from "react-redux";

export default function MenuList() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.menu.cartItems);

  const handleAddToCart = (product: any, action?: string) => {
    const updatedCart = cartItems.map((item: { id: number; count: number; }) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    dispatch(cartItemsListResponse(updatedCart));
  };

  const handleRemoveFromCart = (id: number, action?: string) => {
    const updatedCart = cartItems.map((item: { id: number; count: number; }) =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
    );
    dispatch(cartItemsListResponse(updatedCart));
  };

  return (
    <div className="main-menulist" id="menu">
      <div className="menu-title welcome_title">Menu</div>
      <div className="row">
        {menuItems.map((it) => {
          return (
            <div className="col-4" style={{ marginBottom: "50px"}} key={it.id}>
              <div className="mainCard">
                <div className="menuImage">
                  <img
                    src={it.image}
                    className="menu_images"
                    alt="menu items"
                  />
                </div>
                <div className="menuItem">
                  <div className="menuContent">
                    <div className="row">
                      <div className="menu_name">{it.name}</div>
                      <div>{it.time}</div>
                      <div className="col-7">{it.rate}</div>
                      <div className="col-5">
                        {cartItems?.find((item: { id: number; }) => item.id === it.id)?.count !==
                        0 ? (
                          <div className="item-btns">
                            <button
                              className="add-btn"
                              onClick={() =>
                                handleRemoveFromCart(it.id, "remove")
                              }
                            >
                              {"-"}
                            </button>
                            <div>
                              {
                                cartItems.find((items: { id: number; }) => items.id === it.id)
                                  ?.count
                              }
                            </div>
                            <button
                              className="remove-btn"
                              onClick={() => handleAddToCart(it, "add")}
                            >
                              {"+"}
                            </button>
                          </div>
                        ) : (
                          <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(it)}
                          >
                            Add To Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
