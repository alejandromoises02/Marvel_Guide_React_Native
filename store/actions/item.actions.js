import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";

export const FILTERED_ITEM = "FILTERED_ITEM";

export const filteredItem = (categoryID, itemID) => {
  let item = {};
  if (itemID !== undefined) {
    return (dispatch) => {
      try {
        fetch(
          `${URL_BASE_API}${categoryID}/${itemID}?ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
        )
          .then((response) => response.json())
          .then((data) => {
            const result = data.data.results[0];
            let {
              id,
              title,
              name,
              description,
              thumbnail,
              format,
              pageCount,
              images,
              start,
              end,
              startYear,
              endYear
            } = result;
            if (name != undefined && title == undefined) title = name;
            item = {
              id,
              title,
              description,
              thumbnail,
              format,
              pageCount,
              images,
              start,
              end,
              startYear,
              endYear
            };
            dispatch({
              type: FILTERED_ITEM,
              item,
            });
          });
      } catch (e) {
        console.log(e.message);
      }
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: FILTERED_ITEM,
        item: {},
      });
    };
  }
};
