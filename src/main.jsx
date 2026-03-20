// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client'
import './index.css';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </StrictMode>
);
