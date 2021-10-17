import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";
import ItemData from "../../models/ItemData";

export const FILTERED_ITEM = "FILTERED_ITEM";
export const CLEAR_ITEM = "CLEAR_ITEM";

export const filteredItem = (categoryID, itemID) => {
  let item = {};
  return async (dispatch) => {
    const response = await fetch(
      `${URL_BASE_API}${categoryID}/${itemID}?ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
    );
    const data = await response.json();
    const result = data.data.results[0];
    let {id,title,name,description,thumbnail,pageCount,start,end,startYear,endYear} = result;

    /////////////////////////////////////////////////////
    if (name != undefined && title == undefined) title = name;
    const urlImage = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    description = !description ? "Description not available" : description;
    let buttonTitle = "";
    if (pageCount) {
      //format title for comic
      title = `${title} (${pageCount}pages)`;
      buttonTitle = `See Related Characters`;
    } else if (start) {
      //format title for events
      title = `${title} ${start}-${end}`;
      buttonTitle = `See Related Comics`;
    } else if (startYear) {
      //format title for series
      title = `${title} ${startYear}-${endYear}`;
      buttonTitle = `See Related Comics`;
    } else {
      //format title for characters
      buttonTitle = `See Related Comics`;
    }
    /////////////////////////////////////////////////////

    item = new ItemData(id, title, urlImage, description, buttonTitle , categoryID)
    dispatch({
      type: FILTERED_ITEM,
      item
    });
  };
};

export const clearItem = () => {
  return {
    type: CLEAR_ITEM,
    item: {}
  };
};
