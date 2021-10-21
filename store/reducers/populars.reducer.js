import { POPULARS } from '../../data/popular';
import { SELECT_CATEGORY_POPULAR } from '../actions/populars.actions';

const initialState = {
    list: POPULARS,
    selectedID: null,
};

const PopularsReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_CATEGORY_POPULAR:
            return {
                ...state,
                selectedID: action.payload,
            };
        default:
            return state
    }
}

export default PopularsReducer;