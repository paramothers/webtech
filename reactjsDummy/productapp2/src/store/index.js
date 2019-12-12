import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modelReducer from "./reducer/modelReducer";
import stateReducer from "./reducer/stateReducer";
import { customReducerEnhancer } from "./reducer/customReducerEnhancer";
import {multiActions} from "./middleware/multiactionMiddleware";
import {asyncEnhancer} from "./asyncEnhancer";

const enhancedReducer = customReducerEnhancer(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  })
);

export default createStore(enhancedReducer, compose(applyMiddleware(multiActions), asyncEnhancer(2000)));

export {
  saveProduct,
  saveSupplier,
  deleteProduct,
  deleteSupplier
} from "./actionCreators/modelActionCreators";
