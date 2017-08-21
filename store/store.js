import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducer/rootreducer'
import logger from 'redux-logger'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// const store = createStore(rootReducer);

let finalCreateStore = compose (
    applyMiddleware(thunk, createLogger()))(createStore)


export default function configureStore(initialState = { value:'',price:'' } ) {
    return finalCreateStore(rootReducer,initialState)
}
