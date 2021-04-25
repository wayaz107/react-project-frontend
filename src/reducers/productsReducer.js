export default function productsReducer(state = {
    perfumes: []}, action) {
      switch (action.type){
        
        case 'FETCH_PRODUCTS':
          return {products: action.payload}
      default:
        return state    
      }
    }
