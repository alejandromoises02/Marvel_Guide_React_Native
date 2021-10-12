//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import CategoryReducer from './reducers/category.reducer'
import ListReducer from './reducers/list.reducer';
import ItemReducer from './reducers/item.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    list: ListReducer,
    item: ItemReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))