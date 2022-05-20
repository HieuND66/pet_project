import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { QuanLyPetReducer } from "./reducers/QuanLyPetReducer";
import { QuanLyUserReducer } from "./reducers/QuanLyUserReducer";



const rootReducer = combineReducers({
  QuanLyUserReducer,
  QuanLyPetReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))