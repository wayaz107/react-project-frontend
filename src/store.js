import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import productsReducer from './reducers/productsReducer.js'
import commentsReducer from './reducers/commentsReducer.js'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    products: productsReducer,
    commments: commentsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store