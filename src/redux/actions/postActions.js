export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => ({
    type: GET_POSTS
})

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
});

export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
})



export function retriveData(){
    return async dispatch => {
        dispatch(getPosts())
        try{
            const response = await fetch('https://api.covid19india.org/state_district_wise.json')
            const data = await response.json()
            dispatch(getPostsSuccess(data));
        } catch(e){
            dispatch(getPostsFailure)
        }
    }
}