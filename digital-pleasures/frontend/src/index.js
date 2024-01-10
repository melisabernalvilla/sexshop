import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/app.css';
import './assets/css/digital.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
