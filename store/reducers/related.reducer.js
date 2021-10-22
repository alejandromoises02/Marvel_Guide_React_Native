import {
    SELECT_LIST,
    SELECT_ITEM,
    CLEAR_LIST
  } from "../actions/related.action";
  
  const initialState = {
    list: [],
    selectedID: null,
  };
  
  const ListReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_ITEM:
        return {
          ...state,
          selectedID: action.payload
        };
      case SELECT_LIST:
        return {
          ...state,
          list: action.list
        };
      case CLEAR_LIST:
        return {
          ...state,
          list: action.list,
          selectedID: action.selectedID,
        };
      default:
        return state;
    }
  };
  
  export default ListReducer;