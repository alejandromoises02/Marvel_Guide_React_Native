import { POPULARS } from '../../data/popular'
import { SELECT_CATEGORY_RELATED } from '../actions/categoryRelated.actions';

const initialState = {
    list: POPULARS,
    selectedID: null,
};

const categoryRelated = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_CATEGORY_RELATED:
            return {
                ...state,
                selectedID: action.payload,
            };
        default:
            return state
    }
}

export default categoryRelated;