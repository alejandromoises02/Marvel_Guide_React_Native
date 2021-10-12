import { SELECT_ITEM } from '../actions/list.actions';
import { SELECT_LIST } from '../actions/list.actions';

const initialState = {
    list: [],
    selectedID: null,
};

const ListReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT_ITEM:
            return{
                state,
                selectedID: action.payload,
            }
        case SELECT_LIST:
            return{
                state,
                list: action.list,
            }
        default:
            return state;
    }
}

export default ListReducer