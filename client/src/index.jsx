import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import reducers from "./reducers";

import App from './App.jsx';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}><App /></Provider>
  </StrictMode>,
)
