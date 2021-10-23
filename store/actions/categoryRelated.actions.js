export const SELECT_CATEGORY_RELATED = 'SELECT_CATEGORY_RELATED';

export const selectCategory = (id) =>({
    type: SELECT_CATEGORY_RELATED,
    payload: id,
})