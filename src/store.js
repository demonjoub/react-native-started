import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { rootReducer } from './reducers'
import axiosMiddleware from "./middlewares/axiosMiddlewares";


const logger = store => next => action => {
  console.group(action.type)
  console.log('current state', store.getState())
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const enhancerList = [axiosMiddleware, thunk.withExtraArgument(axios), logger];
/**
 * Initialize store by name
 * @param {string} storeName
 * @returns {*}
 */
const initStoreByName = storeName => {
  const store = createStore(
    rootReducer(storeName),
    {},
    applyMiddleware(...enhancerList)
  );
  return store;
};

export default initStoreByName
