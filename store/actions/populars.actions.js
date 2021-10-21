export const SELECT_CATEGORY_POPULAR = 'SELECT_CATEGORY_POPULAR';

export const selectPopularCategory = (id) =>({
    type: SELECT_CATEGORY_POPULAR,
    payload: id,
})