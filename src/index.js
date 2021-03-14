import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import './assets/fonts/font-awesome/font-awesome.css';
import './assets/slick.slider/slick-theme.css';
import './assets/slick.slider/slick.css';
import './assets/fonts/custom-fonts.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
