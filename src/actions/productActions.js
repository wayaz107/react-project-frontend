
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

    //add products

    export const addProduct = (productData) => {
      return (dispatch) => {
      fetch ('http://localhost:3000/products',{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(productData)
      })
      .then(res => res.json())
      .then(product => {
        dispatch({type: 'ADD_PRODUCT', payload: product})
      })
    }
  }

  //delete products
  export const deleteProduct = productId => {
    return (dispatch) => {
      fetch (`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(product => {
        dispatch({type: 'DELETE_PRODUCT', payload: product.id})
      })
    }
  }



