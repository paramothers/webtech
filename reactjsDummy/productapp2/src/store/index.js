import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modelReducer from "./reducer/modelReducer";
import stateReducer from "./reducer/stateReducer";
import { customReducerEnhancer } from "./reducer/customReducerEnhancer";
import { multiActions } from "./middleware/multiactionMiddleware";
import { asyncEnhancer } from "./asyncEnhancer";
import { createRestMiddleware } from "../webservices/RestMiddleware";

const enhancedReducer = customReducerEnhancer(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  })
);

const restMiddleware = createRestMiddleware(
  "http://localhost:3500/api/products",
  "http://localhost:3500/api/suppliers"
);

export default createStore(
  enhancedReducer,
  compose(applyMiddleware(multiActions),applyMiddleware(restMiddleware), asyncEnhancer(2000))
);

export {
  saveProduct,
  saveSupplier,
  deleteProduct,
  deleteSupplier
} from "./actionCreators/modelActionCreators";
