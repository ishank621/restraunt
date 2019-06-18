import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{ // data sent back to be added to comments
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }

});