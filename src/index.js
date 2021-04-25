import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// // import './index.css';
// import App from './App';
// import store from './store.js'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const API_URL = 'http://localhost:3000/api/v1'

const setProducts = products => {
  return {
    type: 'FETCH_PRODUCTS',
    products
  }
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch({type: 'LOADING_PRODUCTS'});
      return fetch(`${API_URL}/products/`)
      .then(response => response.json())
      .then(products=> dispatch(setProducts(products)))
      .catch(error => console.log(error))
  }
}

// export function fetchProducts(action) {
//   return(dispatch) => {
//     fetch(`${API_URL}/products/`)
//     .then (response => response.json())
//   }