import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer'

import getSeriesMiddleware from './middlewares/get-series-middleware'

const middlewares = [getSeriesMiddleware]

export default function configureStore() {
 return createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
 );
}