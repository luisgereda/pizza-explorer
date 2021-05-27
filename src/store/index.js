import { combineReducers, createStore } from "redux";
import userReducer from "./users/reducers";
import pizzasReducer from "./pizzas/reducers";
import restaurantsReducer from "./restaurants/reducers";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(
  combineReducers({
    user: userReducer,
    pizzas: pizzasReducer,
    restaurants: restaurantsReducer,
  }),
  enhancer
);

export default store;
