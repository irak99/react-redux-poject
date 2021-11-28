import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { productReducer, selectedProductsReducer,cartReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cart:cartReducer,
  user:loginReducer,
});

export default reducers;
