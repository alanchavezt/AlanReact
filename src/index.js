import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getToken} from "./utils/Common";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.js';

axios.interceptors.request.use(
    request => {
        const token = getToken();
        request.headers.Authorization = token || null;
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
