import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
 import axios from 'axios';

//  axios.defaults.baseURL = "http://localhost:3001"
 axios.defaults.baseURL = "https://driversback-production.up.railway.app/"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
