import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer/reducer";
import { Provider } from "react-redux";

import App from "./components/App/App";

const store = createStore(reducer);

const app = (
   <Provider store={store}>
      <App />
   </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
