import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length //comments is an array of comments and .length gives the id next to the last 1 since array starts from 0
            comment.date = new Date().toISOString();
            return state.concat(comment); //pushes a new elemen t into the array which the state has, thus, not modifing the state coz we cant directly mutate the state
            default:
            return state;
    }
}