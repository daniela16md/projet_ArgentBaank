import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); // Make sure this matches your HTML file
const root = createRoot(container); // Create a root
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
