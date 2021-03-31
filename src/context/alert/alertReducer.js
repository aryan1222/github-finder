import * as TYPES from "../types";

const reducer = (state, action) => {
    switch(action.type){
        
        case TYPES.SET_ALERT:
            return {
                ...state,
                alert : action.payload
            }

        case TYPES.REMOVE_ALERT :
            return {
                ...state,
                alert : null
            }

        default : return state;
    }
}

export default reducer;