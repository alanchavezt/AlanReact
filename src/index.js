import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.js';

import '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library, so you can use it in your page
library.add(fas, far, fab)

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getToken} from "./utils/Common";


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
