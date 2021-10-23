import { URL_BASE_API, API_KEY_PUBLIC, HASH } from "../../constants/marvelApi";
import ItemData from "../../models/ItemData";

export const FILTERED_ITEM_RELATED = "FILTERED_ITEM_RELATED";
export const CLEAR_ITEM_RELATED = "CLEAR_ITEM_RELATED";

export const filteredItem = (categoryID, itemID) => {
  let item = {};

  if(categoryID == 'charactersPopular') {
    categoryID = 'characters';
  }else if(categoryID == 'comicsPopular') {
    categoryID = 'comics';
  };

  return async (dispatch) => {
    const response = await fetch(
      `${URL_BASE_API}${categoryID}/${itemID}?ts=1&apikey=${API_KEY_PUBLIC}&hash=${HASH}`
    );
    const data = await response.json();
    const result = data.data.results[0];
    let {id,title,name,description,thumbnail,pageCount,startYear,endYear} = result;

    /////////////////////////////////////////////////////
    if (name != undefined && title == undefined) title = name;
    const urlImage = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    description = !description ? `${title} is part of the Amazing Marvel Universe.` : description;
    let buttonTitle = "";
    let related = "";
    if (pageCount || pageCount == 0) {
      //format title for comic
      title = `${title} (${pageCount}pages)`;
      buttonTitle = "";
      related = 'characters';
    } else if (startYear) {
      //format title for series
      title = `${title} ${startYear}-${endYear}`;
      buttonTitle = `See Related Comics`;
      related = 'comics';
    } else {
      //format title for characters and series
      buttonTitle = `See Related Comics`;
      related = 'comics';
    }
    /////////////////////////////////////////////////////

    item = new ItemData(id, title, urlImage, description, buttonTitle , categoryID, related)
    dispatch({
      type: FILTERED_ITEM_RELATED,
      item
    });
  };
};

export const clearItem = () => {
  return {
    type: CLEAR_ITEM_RELATED,
    item: {}
  };
};
