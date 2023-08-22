// import { Button, Modal } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { cartItemsListResponse } from "../../redux/actions/menu";
// import { menuItems } from "../../utils/helpers/container/menu";

// export interface ICartModalProps {
//   show: boolean;
//   closeModal: () => void;
// }

// const CartModal = ({ show, closeModal }: ICartModalProps) => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: any) => state.menu.cartItems);

//   const handleAddToCart = (product: any) => {
//     const updatedCart = cartItems.map((item: { id: number; count: number }) =>
//       item.id === product.id ? { ...item, count: item.count + 1 } : item
//     );
//     dispatch(cartItemsListResponse(updatedCart));
//   };

//   const handleRemoveFromCart = (id: number) => {
//     const updatedCart = cartItems.map((item: { id: number; count: number }) =>
//       item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
//     );
//     dispatch(cartItemsListResponse(updatedCart));
//   };

//   const filteredCartItems = cartItems.filter((it: any) => it.count > 0);

//   return (
//     <Modal show={show} aria-labelledby="contained-modal-title" centered>
//       <Modal.Header>
//         <img src="close-button" alt="close" onClick={closeModal} />
//       </Modal.Header>
//       {filteredCartItems.length ? (
//         <Modal.Body>
//           {filteredCartItems.map((it: any, index: number) => {
//             return it.count > 0 ? (
//               <div className="row" key={index}>
//                 <div
//                   className="images col-6"
//                   style={{ paddingBottom: "30px", paddingLeft: "40px" }}
//                 >
//                   <img
//                     src={it.image}
//                     alt={it.image}
//                     width={"100px"}
//                     height={"70px"}
//                   />
//                 </div>
//                 <div
//                   className="btns col-6"
//                   style={{
//                     display: "flex",
//                     justifyContent: "end",
//                     flexDirection: "row",
//                     height: "40px",
//                   }}
//                 >
//                   <button onClick={() => handleRemoveFromCart(it.id)}>
//                     {"-"}
//                   </button>
//                   <div
//                     style={{
//                       paddingLeft: "40px",
//                       display: "flex",
//                       alignItems: "center",
//                       alignContent: "center",
//                       justifyContent: "center",
//                       paddingRight: "40px",
//                       backgroundColor: "#A27C62",
//                     }}
//                   >
//                     {it.count}
//                   </div>
//                   <button onClick={() => handleAddToCart(it)}>{"+"}</button>
//                 </div>
//               </div>
//             ) : null;
//           })}
//         </Modal.Body>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "80px",
//           }}
//         >
//           Your Cart is Empty
//         </div>
//       )}
//       {filteredCartItems.length > 0 ? (
//         <Modal.Footer>
//           <div className="row">
//             <div className="col-9">
//               <Button
//                 style={{ backgroundColor: "#A27C62", borderColor: "#A27C62" }}
//                 onClick={() => {
//                   dispatch(cartItemsListResponse(menuItems));
//                   closeModal();
//                 }}
//               >
//                 Discard All Items From Cart
//               </Button>
//             </div>
//             <div className="col-3">
//               <Button
//                 style={{ backgroundColor: "#A27C62", borderColor: "#A27C62" }}
//                 onClick={() => false}
//               >
//                 Checkout
//               </Button>
//             </div>
//           </div>
//         </Modal.Footer>
//       ) : null}
//     </Modal>
//   );
// };

// export default CartModal;

import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsListResponse } from "../../redux/actions/menu";
import { menuItems } from "../../utils/helpers/container/menu";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

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
      <Container fluid="sm" style={{ width: "60%", paddingBottom: "5%" }}>
        <div
          style={{
            paddingTop: "5%",
            color: "#A27C62",
            textAlign: "left",
            fontWeight: "bold",
            paddingLeft: "15px",
            fontSize: "20px",
          }}
        >
          {"CART ITEMS"}
        </div>
        <div style={{ paddingTop: "2%" }}>
          {filteredCartItems.length ? (
            filteredCartItems.map((it: any, index: number) => {
              return it.count > 0 ? (
                <div className="row" key={index}>
                  <div
                    className="images col-3"
                    style={{ paddingBottom: "30px", paddingLeft: "30px" }}
                  >
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
                  </div>
                  <div
                    className="col-2"
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                    }}
                  >
                    {it.name}
                  </div>
                  <div
                    className="btns col-6"
                    style={{
                      display: "flex",
                      justifyContent: "end",
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
                  </div>
                </div>
              ) : null;
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
                fontSize: '24px'
              }}
            >
              Your Cart is Empty
            </div>
          )}
        </div>
        {filteredCartItems.length > 0 ? (
          <div>
            <div
              style={{
                color: "#A27C62",
                textAlign: "left",
                fontWeight: "bold",
                paddingLeft: "15px",
                fontSize: "20px",
              }}
            >
              PRICE DETAILS
            </div>
            <div
              style={{
                paddingTop: "2%",
              }}
            >
              {filteredCartItems?.map((it: any, index: number) => {
                return (
                  <div className="row" key={index}>
                    <div
                      className="col-5"
                      style={{
                        paddingLeft: "30px",
                      }}
                    >
                      {it.name}
                    </div>
                    <div
                      className="btns col-6"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "row",
                        alignContent: "center",

                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          paddingLeft: "40px",
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                          justifyContent: "center",
                          paddingRight: "40px",
                          height: "38px",
                        }}
                      >
                        {`${it.rate} * ${it.count}`} ={" "}
                        {Number(it.rate.slice(3, 10)) * it.count}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <div
                  className="col-10"
                  style={{
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Total Price
                </div>
                <div
                  className="col-1"
                  style={{
                    paddingLeft: "40px",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                    paddingRight: "110px",
                    height: "38px",
                    paddingTop: "40px",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  RS.{totalAmount.price}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
      <div
        style={{
          position: "fixed",
          bottom: "2px",
          paddingLeft: "1%",
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#A27C62",
        }}
      >
        {filteredCartItems.length > 0 ? (
          <div className="row">
            <div className="col-9">
              <Button
                style={{
                  backgroundColor: "#926546",
                  borderColor: "#926546",
                  fontSize: "20px",
                }}
                onClick={() => {
                  dispatch(cartItemsListResponse(menuItems));
                  navigate("/");
                }}
              >
                Discard All Items From Cart
              </Button>
            </div>
            <div className="col-3">
              <Button
                style={{
                  backgroundColor: "#926546",
                  borderColor: "#926546",
                  fontSize: "20px",
                }}
                onClick={() => false}
              >
                Checkout
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CartModal;
