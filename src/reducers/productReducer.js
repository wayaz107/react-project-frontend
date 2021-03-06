const productReducer = (state = { products: [] }, action) => {
      
      switch (action.type) {
        
        case 'FETCH_PRODUCTS':
          return {...state, products: action.payload};
        
        case 'ADD_PRODUCT':
          return{...state, products: [...state.products, action.payload]}
        
        case 'DELETE_PRODUCT':
          const filteredProducts = state.products.filter(product => product.id !== action.payload )
          return {...state, products: filteredProducts}
        
        case 'TOGGLE_OWNED':
        case 'TOGGLE_WISH_LIST':
          const product = state.products.map(product => {
            if(product.id !== action.payload.id){
              return product
            } else {
              return action.payload
            }
          })
          return {...state, products: product}
         
        case 'ADD_COMMENT':
            const addCommentProduct = state.products.map(product => {
              if (product.id === action.payload.id) {
                return action.payload
              } else {
                return product
              }
            })
            return {...state, products: addCommentProduct}  
       
        case 'DELETE_COMMENT':
          const deleteCommentProduct = state.products.map(product => {
            if(product.id === action.payload.id){
              return action.payload
            } else {
              return product
            }
          })
          return {...state, products: deleteCommentProduct}

        default:
           return state  
      }


    }

  export default productReducer;