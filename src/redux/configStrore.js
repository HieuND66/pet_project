import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { QuanLyUserReducer } from "./reducers/QuanLyUserReducer";



const rootReducer = combineReducers({
  QuanLyUserReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))