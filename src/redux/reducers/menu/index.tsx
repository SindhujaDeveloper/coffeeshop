import * as actionTypes from "../../actions/actionTypes/menu";
import { menuItems } from "../../../utils/helpers/container/menu";
import { MenuAction } from "../../actions/menu";

const initialState = {
  cartItems: menuItems,
};

export const menuReducer = (
  state: { cartItems: any } = initialState,
  action: MenuAction
) => {
  switch (action.type) {
    case actionTypes.CART_ITEMS_LIST_REQUEST:
      return {
        ...state,
      };
    case actionTypes.CART_ITEMS_LIST_RESPONSE:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.CART_ITEMS_LIST_FAILURE:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
