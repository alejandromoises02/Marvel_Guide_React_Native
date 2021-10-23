import { FILTERED_ITEM, CLEAR_ITEM } from '../actions/item.actions';

const initialState = {
    item: {},
};

const ItemReducer = (state = initialState, action) =>{
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

export default ItemReducer