
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
  export const addProduct = (productData, history, path) => {
      return (dispatch) => {
      fetch ('http://localhost:3000/products',{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify(productData)
      })
      .then(res => res.json())
      .then(product => {
        history.push(path)
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

// //toggle product owned/not owned
export const toggleOwned = (product, productId) => {
  const updatedOwned = {...product, owned: !product.owned};

  return (dispatch) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({product: updatedOwned})
    })
    .then(res => res.json())
    .then(product => {
      dispatch({type: 'TOGGLE_OWNED', payload: product})
    })
  }
}

//add product to the wishlist

export const toggleWishList = (product, productId) => {
  const updatedWishList = {...product, wish_list: !product.wish_list};

  return (dispatch) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({product: updatedWishList})
    })
    .then(res => res.json())
    .then(product => {
    dispatch({type: 'TOGGLE_WISH_LIST', payload: product})
  })
 }
}

