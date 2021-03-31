import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import * as TYPES from '../types';

const AlertState = props =>{

    const initialState = {
        alert : null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: TYPES.SET_ALERT,
            payload : {msg : msg, type: type} 
        })
        
        setTimeout(() => dispatch({
            type : TYPES.REMOVE_ALERT
        }), 5000);
    }

    return <AlertContext.Provider
     value = {{
        alert : state.alert,
        setAlert
     }}>
         {props.children}
    </AlertContext.Provider>
}

export default AlertState;