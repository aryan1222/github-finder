import * as TYPES from "../types";

const reducer = (state, action) => {
    switch(action.type){
        
        case TYPES.SEARCH_USER:
            return {
                ...state,
                loading : false,
                users : action.payload
            }

        case TYPES.SET_LOADING :
            return {
                ...state,
                loading : true
            }

        case TYPES.CLEAR_USERS :
            return {
                ...state,
                users : [],
                loading : false
            }

        case TYPES.GET_USER :
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        default : return state;
    }
}

export default reducer;