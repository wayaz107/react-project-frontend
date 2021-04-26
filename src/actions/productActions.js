
//fetch all products
export const fetchProducts = () => {
    return (dispatch) => {
        fetch ('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => dispatch({
          type: 'FETCH_PRODUCTS',
          payload: products
        }))
      };
    };

  


