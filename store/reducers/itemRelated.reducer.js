import { FILTERED_ITEM_RELATED, CLEAR_ITEM_RELATED } from '../actions/itemRelated.actions';

const initialState = {
    item: {},
};

const ItemRelatedReducer = (state = initialState, action) =>{
    switch(action.type){
        case FILTERED_ITEM_RELATED:
            return{
                ...state,
                item: action.item,
            }
        case CLEAR_ITEM_RELATED:
            return{
                ...state,
                item: {},
            }
        default:
            return state;
    }
}

export default ItemRelatedReducer