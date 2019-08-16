import { createStore, compose, applyMiddleware } from "redux";

export default (reducers, middlewares) => {
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
