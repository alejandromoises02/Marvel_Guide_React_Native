import {
    SELECT_LIST_RELATED,
    SELECT_ITEM_RELATED,
    CLEAR_LIST_RELATED,
  } from "../actions/related.action";
  
  const initialState = {
    list: [],
    selectedID: null,
  };
  
  const ListReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_ITEM_RELATED:
        return {
          ...state,
          selectedID: action.payload
        };
      case SELECT_LIST_RELATED:
        return {
          ...state,
          list: action.list
        };
      case CLEAR_LIST_RELATED:
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