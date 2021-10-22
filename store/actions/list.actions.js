import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";

export const SELECT_LIST = "SELECT_LIST";
export const SELECT_ITEM = "SELECT_ITEM";
export const ADD_ITEM_LIST = "ADD_ITEM_LIST";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";
export const CLEAR_LIST = "CLEAR_LIST";

export const selectItem = (itemID) =>{
  return ({
  type: SELECT_ITEM,
  payload: itemID,
})
}

export const selectSearchList = (search) =>{
  return ({
  type: SET_SEARCH_LIST,
  payload: search,
})
}

export const clearList = () => {
  return {
    type: CLEAR_LIST,
    list: [],
    selectedID: null,
    search: ""
  };
};


export const selectList = (categoryID, startSearch, related, idRelated) => {
  let list = [];
  let search = "";
  let popularQuery = "";

  
  if (startSearch != "") {
    search =
      categoryID == "characters" || categoryID == "events"
        ? `nameStartsWith=${startSearch}&`
        : `titleStartsWith=${startSearch}&`;
  }

  if(categoryID == 'charactersPopular') {
    popularQuery = 'comics=30090&';
    categoryID = 'characters';
  }else if(categoryID == 'comicsPopular') {
    popularQuery = 'characters=1009165&';
    categoryID = 'comics';
  };

  let reladetQuery = related ? `/${idRelated}/${related}` : "";


  if (categoryID !== undefined) {
    return (dispatch) => {
      try {
        fetch(
          `${URL_BASE_API}${categoryID}${reladetQuery}?${search}${popularQuery}limit=20&offset=0&ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
        )
          .then((response) => response.json())
          .then((data) => {
            const result = data.data.results;
            let filteredList = result.filter(
              (item) =>
                item.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ); //items without thumbnail are discarded
            list = filteredList.map((item) => {
              let { id, title, name, thumbnail } = item;
              if (name != undefined && title == undefined) title = name;
              const urlImage = `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
              return {
                id,
                title,
                urlImage
              };
            });
            dispatch({
              type: SELECT_LIST,
              list
            });
          });
      } catch (e) {
        console.log(e.message);
      }
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: SELECT_LIST,
        list: []
      });
    };
  }
};

export const addItemList = (categoryID, startSearch, page) => {
  let list = [];
  let popularQuery = "";
  let search = "";
  if (startSearch != "") {
    search =
      categoryID == "characters" || categoryID == "events"
        ? `nameStartsWith=${startSearch}&`
        : `titleStartsWith=${startSearch}&`;
  }

  if(categoryID == 'charactersPopular') {
    popularQuery = 'comics=30090&';
    categoryID = 'characters';
  }else if(categoryID == 'comicsPopular') {
    popularQuery = 'characters=1009165&';
    categoryID = 'comics';
  };

  return (dispatch) => {
    try {
      fetch(
        `${URL_BASE_API}${categoryID}?${search}${popularQuery}limit=20&offset=${
          page * 20
        }&ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
      )
        .then((response) => response.json())
        .then((data) => {
          const result = data.data.results;
          let filteredList = result.filter(
            (item) =>
              item.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ); //items without thumbnail are discarded
          list = filteredList.map((item) => {
            let { id, title, name, thumbnail } = item;
            if (name != undefined && title == undefined) title = name;
            const urlImage = `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
            return {
              id,
              title,
              urlImage
            };
          });
          dispatch({
            type: ADD_ITEM_LIST,
            list
          });
        });
    } catch (e) {
      console.log(e.message);
    }
  };
};
