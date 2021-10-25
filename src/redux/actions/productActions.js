import { ActionTypes } from "../contants/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = () => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
  };
};