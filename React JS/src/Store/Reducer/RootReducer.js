import { combineReducers } from "redux";
import FetchProducts from "../Reducer/FetchProducts";

const RootReducers = combineReducers({
  FetchProducts,
});

export default RootReducers;
