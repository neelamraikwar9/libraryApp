import { createStore, applyMiddleware } from "redux";
import LiabraryManagementReducer from './LibraryManagementReducer';
import loggerMiddleware from "./loggerMiddleware";


const store = createStore(LiabraryManagementReducer, applyMiddleware(loggerMiddleware)); 

export default store; 