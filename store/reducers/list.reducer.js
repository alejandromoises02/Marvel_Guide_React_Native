import {
  SELECT_LIST,
  SELECT_ITEM,
  ADD_ITEM_LIST,
  SET_SEARCH_LIST,
  CLEAR_LIST
} from "../actions/list.actions";

const initialState = {
  list: [],
  selectedID: null,
  search: "",
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
    case ADD_ITEM_LIST:
      return {
        ...state,
        list: [...state.list, ...action.list]
      };
    case SET_SEARCH_LIST:
      return {
        ...state,
        search: action.payload,
      };
    case CLEAR_LIST:
      return {
        ...state,
        list: action.list,
        selectedID: action.selectedID,
        search: action.search,
      };
    default:
      return state;
  }
};

export default ListReducer;
