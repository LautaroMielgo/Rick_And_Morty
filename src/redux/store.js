import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thukMiddleware from 'redux-thunk'


const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
      reducer,
      composeEnhancer(applyMiddleware(thukMiddleware))
);


export default store;

