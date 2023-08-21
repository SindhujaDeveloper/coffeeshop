import {
  ActionsUnion,
  createAction,
} from "../../../utils/helpers/redux-helpers";
import * as actionTypes from "../actionTypes/menu";

export const cartItemsListRequest = (payload: any) =>
  createAction(actionTypes.CART_ITEMS_LIST_REQUEST, payload);
export const cartItemsListResponse = (data: any) =>
  createAction(actionTypes.CART_ITEMS_LIST_RESPONSE, data);
export const cartItemsListFailure = (error: null | string) =>
  createAction(actionTypes.CART_ITEMS_LIST_FAILURE, error);

const MENU_ACTIONS = {
  cartItemsListRequest,
  cartItemsListResponse,
  cartItemsListFailure,
};

export type MenuAction = ActionsUnion<typeof MENU_ACTIONS>;
