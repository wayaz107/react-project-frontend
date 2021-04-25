
//fetch all products
export const fetchProducts = () => {
    return (dispatch) => {
        fetch ('http://localhost:3000/api/v1/products')
        .then(response => response.json())
        .then(products => dispatch({
          type: 'FETCH_PRODUCTS',
          payload: products
        }))
      };
    };

  

// add products


// export const fetchProduct = (id) => {
//     return dispatch => {
//         return fetch(`${API_URL}/products/${id}`)
//         .then(response => response.json())
//     }
// }

export const fetchComments = (productId) => {
    return dispatch => {
      return fetch(`${API_URL}/products/${productId}/comments/`)
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error))
    }
  }