import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";

export const SELECT_LIST_RELATED = "SELECT_LIST_RELATED";
export const SELECT_ITEM_RELATED = "SELECT_ITEM_RELATED";
export const CLEAR_LIST_RELATED = "CLEAR_LIST_RELATED";

export const selectItem = (itemID) =>{
  return ({
  type: SELECT_ITEM_RELATED,
  payload: itemID,
})
}

export const clearListRelated = () => {
  return {
    type: CLEAR_LIST_RELATED,
    list: [],
    selectedID: null,
  };
};


export const selectList = (categoryID,related, idRelated) => {
  let list = [];
  let popularQuery = "";
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
          `${URL_BASE_API}${categoryID}${reladetQuery}?${popularQuery}limit=20&offset=0&ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
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
              type: SELECT_LIST_RELATED,
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
        type: SELECT_LIST_RELATED,
        list: []
      });
    };
  }
};


