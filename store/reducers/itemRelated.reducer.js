import { FILTERED_ITEM, CLEAR_ITEM } from '../actions/itemRelated.actions';

const initialState = {
    item: {},
};

const ItemRelatedReducer = (state = initialState, action) =>{
    switch(action.type){
        case FILTERED_ITEM:
            return{
                ...state,
                item: action.item,
            }
        case CLEAR_ITEM:
            return{
                ...state,
                item: {},
            }
        default:
            return state;
    }
}

export default ItemRelatedReducer