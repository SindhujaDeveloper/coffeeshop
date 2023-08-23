import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsListResponse } from "../../redux/actions/menu";
import { menuItems } from "../../utils/helpers/container/menu";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

import "../../assets/css/cart.css";

export interface ICartModalProps {
  show: boolean;
  closeModal: () => void;
}

const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.menu.cartItems);

  const handleAddToCart = (product: any) => {
    const updatedCart = cartItems.map((item: { id: number; count: number }) =>
      item.id === product.id ? { ...item, count: item.count + 1 } : item
    );
    dispatch(cartItemsListResponse(updatedCart));
  };

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cartItems.map((item: { id: number; count: number }) =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
    );
    dispatch(cartItemsListResponse(updatedCart));
  };

  const filteredCartItems = useMemo(() => {
    return cartItems.filter((it: any) => it.count > 0);
  }, [cartItems]);

  const totalAmount = cartItems.reduce(
    (acc: any, cumm: any) => {
      acc.price += Number(cumm.rate.slice(3, 10)) * cumm.count;
      return acc;
    },
    { price: 0 }
  );

  return (
    <>
      <Container fluid="sm" className="mainCart">
        <div className="cartTitle">{"CART ITEMS"}</div>
        <div style={{ paddingTop: "2%" }}>
          {filteredCartItems.length ? (
            filteredCartItems.map((it: any, index: number) => {
              return it.count > 0 ? (
                <Row key={index}>
                  <Col className="images">
                    <img
                      src={it.image}
                      alt={it.image}
                      style={{
                        borderRadius: "5px",
                        width: "150px",
                        height: "120px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                    }}
                  >
                    {it.name}
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "row",
                      alignContent: "center",

                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#FFF",
                        borderColor: "#A27C62",
                        borderRadius: "0px",
                        color: "#A27C62",
                        borderTopLeftRadius: "5px",
                        borderBottomLeftRadius: "5px",
                      }}
                      onClick={() => handleRemoveFromCart(it.id)}
                    >
                      {"-"}
                    </Button>
                    <div
                      style={{
                        paddingLeft: "40px",
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        paddingRight: "40px",
                        backgroundColor: "#A27C62",
                        height: "38px",
                      }}
                    >
                      {it.count}
                    </div>
                    <Button
                      style={{
                        backgroundColor: "#FFF",
                        borderColor: "#A27C62",
                        borderRadius: "0px",
                        color: "#A27C62",
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                      onClick={() => handleAddToCart(it)}
                    >
                      {"+"}
                    </Button>
                  </Col>
                </Row>
              ) : null;
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
                fontSize: "24px",
              }}
            >
              Your Cart is Empty
            </div>
          )}
        </div>
        {filteredCartItems.length > 0 ? (
          <>
            <div className="cartTitle">PRICE DETAILS</div>
            <div className="cartPrice">
              {filteredCartItems?.map((it: any, index: number) => {
                return (
                  <Row key={index}>
                    <Col className="cartItemName">{it.name}</Col>
                    <Col className="centerAlign">
                      <div className="priceForSingle">
                        {`${it.rate} * ${it.count}`} ={" "}
                        {Number(it.rate.slice(3, 10)) * it.count}
                      </div>
                    </Col>
                  </Row>
                );
              })}
              <Row>
                <Col className="cartTotalLeft">Total Price</Col>
                <Col className="cartTotalRight">RS.{totalAmount.price}</Col>
              </Row>
            </div>
          </>
        ) : null}
      </Container>
      <Row className="btnsRow">
        {filteredCartItems.length > 0 ? (
          <>
            <Col className="btn-1">
              <Button
                className="btns"
                onClick={() => {
                  dispatch(cartItemsListResponse(menuItems));
                  navigate("/");
                }}
              >
                Discard Cart
              </Button>
            </Col>
            <Col className="btn-2">
              <Button className="btns" onClick={() => false}>
                Checkout
              </Button>
            </Col>
          </>
        ) : null}
      </Row>
    </>
  );
};

export default CartModal;
