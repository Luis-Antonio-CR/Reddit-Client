import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import App from "./App"

ReactDom.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , 
  document.getElementById('root')
)
