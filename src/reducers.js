import { combineReducers } from 'redux'
import loginReducer from "./features/login/reducer"

const reducerMap = {
  loginReducer
}

export const rootReducer = storeName => combineReducers({ [storeName]: combineReducers(reducerMap) })
