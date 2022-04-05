import React from "react";
import ReactDOM from "react-dom";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

// component file
import App from "./App";
import rootReducer from "./modules";
import myLogger from "./middlewares/myLogger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
  // 여러개의 미들웨어를 적용 할 수 있다.
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
