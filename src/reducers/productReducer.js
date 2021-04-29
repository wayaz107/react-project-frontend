const productReducer = (state = { products: [] }, action) => {
      
      switch (action.type) {
        
        case 'FETCH_PRODUCTS':
          return {...state, products: action.payload};
        
        case 'ADD_PRODUCT':
          return{...state, products: [...state.products, action.payload]}
          default:
          return state    

          case 'ADD_COMMENT':
            const addCommentProduct = state.products.map(product => {
              if (product.id === action.payload.id) {
                return action.payload
              } else {
                return product
              }
            })
            return {...state, products: addCommentProduct}  
      }
    }

  export default productReducer;