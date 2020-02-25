import React from "react";
import { Route } from "react-router";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { routerReducer as routing } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers/index";
import App from "./App";

const reducer = combineReducers({ ...reducers, routing });
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.Fragment>
            <Route component={App} />
        </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
