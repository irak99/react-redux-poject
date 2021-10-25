import { combineReducers } from "redux";
import { loginRedcuer } from "./loginReducer";
import { productReducer, selectedProductsReducer,cartReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
  cart:cartReducer,
  user:loginRedcuer,
});

export default reducers;
