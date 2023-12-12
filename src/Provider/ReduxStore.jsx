import { applyMiddleware, createStore } from "redux";
import InventoryReducer from "../reducer/InventoryReducer";
import { thunk } from "redux-thunk";

const store = createStore(InventoryReducer, applyMiddleware(thunk))

export default store;