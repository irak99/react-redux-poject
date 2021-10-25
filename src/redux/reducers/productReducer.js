import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};
const cart =[]

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
export const cartReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log('payload',payload ,'state',state);
      cart.push(payload)
      return cart ;
    case ActionTypes.REMOVE_FROM_CART:
      return {};
    default:
      return state;
  }
};