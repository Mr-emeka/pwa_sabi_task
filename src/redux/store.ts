import { createStore, applyMiddleware, Middleware } from "redux";
import thunkMiddleware  from "redux-thunk";

import rootReducer from "./rootReducer";

const bindMiddleware = (middleware: Middleware<any, any>[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

