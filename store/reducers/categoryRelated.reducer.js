import { CATEGORIES } from '../../data/categories';
import { SELECT_CATEGORY } from '../actions/category.actions';

const initialState = {
    list: CATEGORIES,
    selectedID: null,
};

const categoryRelated = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedID: action.payload,
            };
        default:
            return state
    }
}

export default categoryRelated;