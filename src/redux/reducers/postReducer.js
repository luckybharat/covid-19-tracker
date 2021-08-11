import * as actions from '../actions/postActions'

export const initialState = { loading: true}
export default function postReducer(state=initialState, action){
    switch (action.type){
        case actions.GET_POSTS:
            return {
                ...state, loading: true
            }
        case actions.GET_POSTS_SUCCESS:
            return{
                ...state, posts: action.payload, loading: false, hasError: true
            }
        case actions.GET_POSTS_FAILURE:
            return {
                ...state, loading: false, hasError: true
            }
        default:
            return state;
    }
}