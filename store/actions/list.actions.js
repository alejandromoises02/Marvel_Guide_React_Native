import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";

export const  SELECT_LIST = "SELECT_LIST";
export const  SELECT_ITEM = "SELECT_ITEM";

export const selectItem = (itemID) =>{
  return ({
  type: SELECT_ITEM,
  payload: itemID,
})
}



export const selectList = (categoryID) => {
  console.log("selectList");
  let list = [];
  if (categoryID !== undefined) {
    return (dispatch) => {
      try {
        fetch(
          `${URL_BASE_API}${categoryID}?limit=40&ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
        )
          .then((response) => response.json())
          .then((data) => {
            const result = data.data.results;
            let filteredList = result.filter(
              (item) =>
                item.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            );//items without thumbnail are discarded
            list = filteredList.map((item) => {
              let { id, title, name, thumbnail } = item;
              if (name != undefined && title == undefined) title = name;
              const urlImage = `${thumbnail.path}/standard_medium.${thumbnail.extension}`
              return {
                id,
                title,
                urlImage
              };
            });
            dispatch({
              type: SELECT_LIST,
              list,
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
        list: [],
      });
    };
  }
};
