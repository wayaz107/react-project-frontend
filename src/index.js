import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import './index.css';
import App from './App';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

const API_URL = 'http://localhost:3001/api/v1'

export function fetchProducts(action) {
  return(dispatch) => {
    fetch(`${API_URL}/products/`)
    .then (response => response.json())