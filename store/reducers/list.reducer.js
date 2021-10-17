import { SELECT_LIST,SELECT_ITEM,ADD_ITEM_LIST } from '../actions/list.actions';

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
        case ADD_ITEM_LIST:
            return {
                state,
                list: [...state.list, ...action.list],
            };
        default:
            return state;
    }
}

export default ListReducer