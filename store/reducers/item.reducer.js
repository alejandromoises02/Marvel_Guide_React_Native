import { FILTERED_ITEM } from '../actions/item.actions';

const initialState = {
    item: {},
    categoryID: null,
};

const ItemReducer = (state = initialState, action) =>{
    switch(action.type){
        case FILTERED_ITEM:
            return{
                state,
                item: action.item,
            }
        default:
            return state;
    }
}

export default ItemReducer