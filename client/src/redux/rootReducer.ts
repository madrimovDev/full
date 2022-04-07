import { combineReducers } from "redux";
import { fetchReducer } from "./fetchProduct/fetchReducer";
import { productReducer } from "./product/productReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  fetch: fetchReducer
})