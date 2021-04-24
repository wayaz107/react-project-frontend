import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import './index.css';
import App from './App';
// import store from './store.js'


// const API_URL = 'http://localhost:3000/api/v1'

// export function fetchProducts() {
//   return(dispatch) => {
//     fetch(`${API_URL}/products/`)
//     .then (response => response.json())
//     .then(perfumes => dispatch({
//       type: 'FETCH_PERFUMES',
//       payload: perfumes
//     }))
//   }  
// }

ReactDOM.render(
    <App />
 ,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
