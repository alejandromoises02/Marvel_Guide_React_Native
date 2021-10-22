//redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//reducers
import CategoryReducer from './reducers/category.reducer'
import ListReducer from './reducers/list.reducer';
import ItemReducer from './reducers/item.reducer';
import AuthReducer from './reducers/auth.reducer';
import PopularsReducer from './reducers/populars.reducer';
import RelatedReducer from './reducers/related.reducer';
import ItemRelatedReducer from './reducers/itemRelated.reducer';
import categoryRelatedReducer from './reducers/categoryRelated.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    list: ListReducer,
    item: ItemReducer,
    auth: AuthReducer,
    populars: PopularsReducer,
    related: RelatedReducer,
    itemRelated: ItemRelatedReducer,
    categoriesRelated: categoryRelatedReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))