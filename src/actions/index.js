const API_URL = 'http://localhost:3000/api/v1'

const setProducts= products => {
    return {
      type: 'FETCH_PRODUCTS',
      products
    }
  }

export const fetchProducts = () => {
    return dispatch => {
        return fetch (`${API_URL}/products`)
        .then(response => response.json())
        .then(products => {
            dispatch(setProducts(products))})
        .catch(error => console.log(error))
    }
}

